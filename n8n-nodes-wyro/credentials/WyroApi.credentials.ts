import type {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class WyroApi implements ICredentialType {
	name = 'wyroApi';

	displayName = 'Wyro API';

	icon: Icon = { light: 'file:../icons/wyro.svg', dark: 'file:../icons/wyro.dark.svg' };

	documentationUrl = 'https://github.com/wyroapi/wyro/tree/main/n8n-nodes-wyro#credentials';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			placeholder: 'wyro_sk_...',
			description:
				'Your wyro API key. Get a free test key without signing up: curl -X POST https://wyroapi.com/v1/sandbox',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials?.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://wyroapi.com/v1',
			url: '/me',
			method: 'GET',
		},
	};
}
