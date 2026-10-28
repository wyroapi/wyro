import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';

const PLATFORMS = [
	{ name: 'Facebook', value: 'facebook' },
	{ name: 'Instagram', value: 'instagram' },
	{ name: 'LinkedIn', value: 'linkedin' },
	{ name: 'Pinterest', value: 'pinterest' },
	{ name: 'Threads', value: 'threads' },
	{ name: 'TikTok', value: 'tiktok' },
	{ name: 'X (Twitter)', value: 'twitter' },
	{ name: 'YouTube', value: 'youtube' },
];

/**
 * Declarative node over the wyro REST API (https://wyroapi.com/openapi.json): publish or schedule a
 * post, read its status, list accounts and get a link to connect a real account.
 */
export class Wyro implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Wyro',
		name: 'wyro',
		icon: { light: 'file:../../icons/wyro.svg', dark: 'file:../../icons/wyro.dark.svg' },
		group: ['output'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Publish and schedule posts on Instagram, TikTok, LinkedIn, X and 4 more networks',
		defaults: {
			name: 'Wyro',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'wyroApi', required: true }],
		requestDefaults: {
			baseURL: 'https://wyroapi.com/v1',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{ name: 'Account', value: 'account' },
					{ name: 'Post', value: 'post' },
				],
				default: 'post',
			},

			// ------------------------------------------------------------ post
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['post'] } },
				options: [
					{
						name: 'Create',
						value: 'create',
						action: 'Publish or schedule a post',
						description: 'With a test key the post is simulated and returns a preview link',
						routing: { request: { method: 'POST', url: '/posts' } },
					},
					{
						name: 'Get',
						value: 'get',
						action: 'Get a post',
						description: 'Get the status per network and the preview link',
						routing: { request: { method: 'GET', url: '=/posts/{{$parameter.postId}}' } },
					},
					{
						name: 'Get Many',
						value: 'getAll',
						action: 'Get many posts',
						description: 'Get recent posts',
						routing: { request: { method: 'GET', url: '/posts' } },
					},
				],
				default: 'create',
			},
			{
				displayName: 'Text',
				name: 'text',
				type: 'string',
				typeOptions: { rows: 4 },
				required: true,
				default: '',
				description: 'Text of the post',
				displayOptions: { show: { resource: ['post'], operation: ['create'] } },
				routing: { send: { type: 'body', property: 'text' } },
			},
			{
				displayName: 'Platforms',
				name: 'platforms',
				type: 'multiOptions',
				required: true,
				options: PLATFORMS,
				default: ['linkedin'],
				description:
					'Networks to publish to. Instagram, TikTok, YouTube and Pinterest need an image or a video.',
				displayOptions: { show: { resource: ['post'], operation: ['create'] } },
				routing: { send: { type: 'body', property: 'platforms' } },
			},
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: { show: { resource: ['post'], operation: ['create'] } },
				options: [
					{
						displayName: 'Media Type',
						name: 'mediaType',
						type: 'options',
						options: [
							{ name: 'Image', value: 'image' },
							{ name: 'Video', value: 'video' },
						],
						default: 'image',
						description: 'Whether the media is an image or a video',
						routing: { send: { type: 'body', property: 'media[0].type' } },
					},
					{
						displayName: 'Media URL',
						name: 'mediaUrl',
						type: 'string',
						default: '',
						description: 'Public URL of the image or video',
						routing: { send: { type: 'body', property: 'media[0].url' } },
					},
					{
						displayName: 'Scheduled At',
						name: 'scheduledAt',
						type: 'dateTime',
						default: '',
						description:
							'When to publish. Leave empty to publish now. Dates without a time zone are read as UTC.',
						routing: { send: { type: 'body', property: 'scheduled_at' } },
					},
				],
			},
			{
				displayName: 'Post ID',
				name: 'postId',
				type: 'string',
				required: true,
				default: '',
				placeholder: 'post_abc123',
				description: 'ID returned when the post was created',
				displayOptions: { show: { resource: ['post'], operation: ['get'] } },
			},

			// ------------------------------------------------------------ account
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: { show: { resource: ['account'] } },
				options: [
					{
						name: 'Connect',
						value: 'connect',
						action: 'Get a link to connect an account',
						description:
							'Returns the link a person opens to connect a real account. After that, the same key publishes for real.',
						routing: { request: { method: 'POST', url: '/connect' } },
					},
					{
						name: 'Get Many',
						value: 'getAll',
						action: 'Get many accounts',
						description: 'Get connected and simulated accounts',
						routing: { request: { method: 'GET', url: '/accounts' } },
					},
				],
				default: 'getAll',
			},
			{
				displayName: 'Platform',
				name: 'platform',
				type: 'options',
				options: PLATFORMS,
				default: 'instagram',
				description: 'Network of the account to connect',
				displayOptions: { show: { resource: ['account'], operation: ['connect'] } },
				routing: { send: { type: 'body', property: 'platform' } },
			},
		],
	};
}
