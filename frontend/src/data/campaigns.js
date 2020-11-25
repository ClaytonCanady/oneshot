const campaigns = [
	{
		_id: '1',
		name: 'campaign 1',
		desc:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim sodales purus, sit amet tincidunt nunc maximus at. Phasellus vulputate condimentum elit sit amet pretium. Sed finibus faucibus aliquam. Donec venenatis efficitur augue, eget commodo metus suscipit eu. Pellentesque pellentesque sollicitudin dui vel feugiat. Aliquam viverra id lorem pellentesque dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam faucibus nunc convallis urna efficitur, eget placerat nisl iaculis. Nunc varius quam quis dolor euismod, eu euismod mi rhoncus. Cras sollicitudin et mi non imperdiet. Donec elementum ante et nulla scelerisque, vitae cursus ligula placerat. Ut nec lacus nec dolor ultricies varius eget nec enim. Aliquam venenatis nibh at nisl aliquet cursus. Maecenas tempor nisl vel pellentesque elementum. Proin euismod purus vel diam posuere tristique. Aliquam bibendum elementum egestas. Cras luctus, lectus vitae tempus eleifend, odio risus lacinia leo, sit amet tempus nibh lorem eleifend lectus. In libero purus, consequat ac neque vestibulum, commodo aliquet sem. Etiam ac lorem sagittis, ultricies est et, placerat massa.',

		rating: 3,
		numRating: 12,
	},
	{
		_id: '2',
		name: 'campaign 2',
		desc:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim sodales purus, sit amet tincidunt nunc maximus at. Phasellus vulputate condimentum elit sit amet pretium. Sed finibus faucibus aliquam. Donec venenatis efficitur augue, eget commodo metus suscipit eu. Pellentesque pellentesque sollicitudin dui vel feugiat. Aliquam viverra id lorem pellentesque dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam faucibus nunc convallis urna efficitur, eget placerat nisl iaculis. Nunc varius quam quis dolor euismod, eu euismod mi rhoncus. Cras sollicitudin et mi non imperdiet. Donec elementum ante et nulla scelerisque, vitae cursus ligula placerat. Ut nec lacus nec dolor ultricies varius eget nec enim.',
		rating: 4,
		numRating: 13,
	},
	{
		_id: '3',
		name: 'campaign 3',
		desc:
			'Vivamus a nunc eget libero vestibulum euismod nec ultrices elit. Phasellus ultrices aliquam nunc eu imperdiet. Fusce non urna neque. Pellentesque consequat fringilla dui varius mollis. Proin vitae mollis augue. In consequat dui a vestibulum dignissim. Proin rhoncus imperdiet tortor, et sodales leo tincidunt et. Quisque ex nisl, ullamcorper quis nisi vitae, tristique efficitur risus. Vivamus pellentesque rhoncus faucibus. Sed et sagittis metus, a facilisis sem. Pellentesque aliquam porttitor pharetra.',
		rating: 5,
		numRating: 1,
	},
	{
		_id: '4',
		name: 'campaign 4',
		desc:
			'Mauris cursus leo ipsum, sed lobortis nisl aliquam id. Praesent nunc lectus, finibus et lectus id, viverra volutpat libero. Phasellus ultrices velit et erat molestie, sit amet ultricies libero finibus. Phasellus interdum leo turpis, id imperdiet ex pulvinar ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris auctor ligula non leo porttitor, non iaculis tellus commodo. Cras sodales semper nunc, a lobortis magna rutrum eget. Aliquam ut congue nibh. Nulla nec ornare arcu.',
		rating: 2.5,
		numRating: 11,
	},
	{
		_id: '5',
		name: 'campaign 5',
		desc:
			'Etiam bibendum nisi sit amet malesuada pharetra. Pellentesque non erat eros. Aliquam eget venenatis purus.',
		rating: 3,
		numRating: 16,
	},
	{
		_id: '6',
		name: 'campaign 6',
		desc:
			'Phasellus ultrices velit et erat molestie, sit amet ultricies libero finibus. Phasellus interdum leo turpis, id imperdiet ex pulvinar ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris auctor ligula non leo porttitor, non iaculis tellus commodo',
		rating: 3,
		numRating: 16,
	},
	{
		_id: '7',
		name: 'campaign 7',
		desc:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim sodales purus, sit amet tincidunt nunc maximus at. Phasellus vulputate condimentum elit sit amet pretium. Sed finibus faucibus aliquam. Donec venenatis efficitur augue, eget commodo metus suscipit eu. Pellentesque pellentesque sollicitudin dui vel feugiat. Aliquam viverra id lorem pellentesque dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam faucibus nunc convallis urna efficitur, eget placerat nisl iaculis. Nunc varius quam quis dolor euismod, eu euismod mi rhoncus. Cras sollicitudin et mi non imperdiet. Donec elementum ante et nulla scelerisque, vitae cursus ligula placerat. Ut nec lacus nec dolor ultricies varius eget nec enim. Aliquam venenatis nibh at nisl aliquet cursus. Maecenas tempor nisl vel pellentesque elementum. Proin euismod purus vel diam posuere tristique. Aliquam bibendum elementum egestas. Cras luctus, lectus vitae tempus eleifend, odio risus lacinia leo, sit amet tempus nibh lorem eleifend lectus. In libero purus, consequat ac neque vestibulum, commodo aliquet sem. Etiam ac lorem sagittis, ultricies est et, placerat massa.',

		rating: 4.5,
		numRating: 12,
	},
	{
		_id: '8',
		name: 'campaign 8',
		desc:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim sodales purus, sit amet tincidunt nunc maximus at. Phasellus vulputate condimentum elit sit amet pretium. Sed finibus faucibus aliquam. Donec venenatis efficitur augue, eget commodo metus suscipit eu. Pellentesque pellentesque sollicitudin dui vel feugiat. Aliquam viverra id lorem pellentesque dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam faucibus nunc convallis urna efficitur, eget placerat nisl iaculis. Nunc varius quam quis dolor euismod, eu euismod mi rhoncus. Cras sollicitudin et mi non imperdiet. Donec elementum ante et nulla scelerisque, vitae cursus ligula placerat. Ut nec lacus nec dolor ultricies varius eget nec enim. Aliquam venenatis nibh at nisl aliquet cursus. Maecenas tempor nisl vel pellentesque elementum. Proin euismod purus vel diam posuere tristique. Aliquam bibendum elementum egestas. Cras luctus, lectus vitae tempus eleifend, odio risus lacinia leo, sit amet tempus nibh lorem eleifend lectus. In libero purus, consequat ac neque vestibulum, commodo aliquet sem. Etiam ac lorem sagittis, ultricies est et, placerat massa.',

		rating: 4.5,
		numRating: 6,
	},

	{
		_id: '9',
		name: 'campaign 9',
		desc:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim sodales purus, sit amet tincidunt nunc maximus at. Phasellus vulputate condimentum elit sit amet pretium. Sed finibus faucibus aliquam. Donec venenatis efficitur augue, eget commodo metus suscipit eu. Pellentesque pellentesque sollicitudin dui vel feugiat. Aliquam viverra id lorem pellentesque dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam faucibus nunc convallis urna efficitur, eget placerat nisl iaculis. Nunc varius quam quis dolor euismod, eu euismod mi rhoncus. Cras sollicitudin et mi non imperdiet. Donec elementum ante et nulla scelerisque, vitae cursus ligula placerat. Ut nec lacus nec dolor ultricies varius eget nec enim. Aliquam venenatis nibh at nisl aliquet cursus. Maecenas tempor nisl vel pellentesque elementum. Proin euismod purus vel diam posuere tristique. Aliquam bibendum elementum egestas. Cras luctus, lectus vitae tempus eleifend, odio risus lacinia leo, sit amet tempus nibh lorem eleifend lectus. In libero purus, consequat ac neque vestibulum, commodo aliquet sem. Etiam ac lorem sagittis, ultricies est et, placerat massa.',

		rating: 4.5,
		numRating: 12,
	},
	{
		_id: '10',
		name: 'campaign 10',
		desc:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim sodales purus, sit amet tincidunt nunc maximus at. Phasellus vulputate condimentum elit sit amet pretium. Sed finibus faucibus aliquam. Donec venenatis efficitur augue, eget commodo metus suscipit eu. Pellentesque pellentesque sollicitudin dui vel feugiat. Aliquam viverra id lorem pellentesque dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam faucibus nunc convallis urna efficitur, eget placerat nisl iaculis. Nunc varius quam quis dolor euismod, eu euismod mi rhoncus. Cras sollicitudin et mi non imperdiet. Donec elementum ante et nulla scelerisque, vitae cursus ligula placerat. Ut nec lacus nec dolor ultricies varius eget nec enim. Aliquam venenatis nibh at nisl aliquet cursus. Maecenas tempor nisl vel pellentesque elementum. Proin euismod purus vel diam posuere tristique. Aliquam bibendum elementum egestas. Cras luctus, lectus vitae tempus eleifend, odio risus lacinia leo, sit amet tempus nibh lorem eleifend lectus. In libero purus, consequat ac neque vestibulum, commodo aliquet sem. Etiam ac lorem sagittis, ultricies est et, placerat massa.',

		rating: 1,
		numRating: 1,
	},
	{
		_id: '11',
		name: 'campaign 11',
		desc:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim sodales purus, sit amet tincidunt nunc maximus at. Phasellus vulputate condimentum elit sit amet pretium. Sed finibus faucibus aliquam. Donec venenatis efficitur augue, eget commodo metus suscipit eu. Pellentesque pellentesque sollicitudin dui vel feugiat. Aliquam viverra id lorem pellentesque dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam faucibus nunc convallis urna efficitur, eget placerat nisl iaculis. Nunc varius quam quis dolor euismod, eu euismod mi rhoncus. Cras sollicitudin et mi non imperdiet. Donec elementum ante et nulla scelerisque, vitae cursus ligula placerat. Ut nec lacus nec dolor ultricies varius eget nec enim. Aliquam venenatis nibh at nisl aliquet cursus. Maecenas tempor nisl vel pellentesque elementum. Proin euismod purus vel diam posuere tristique. Aliquam bibendum elementum egestas. Cras luctus, lectus vitae tempus eleifend, odio risus lacinia leo, sit amet tempus nibh lorem eleifend lectus. In libero purus, consequat ac neque vestibulum, commodo aliquet sem. Etiam ac lorem sagittis, ultricies est et, placerat massa.',

		rating: 4.0,
		numRating: 11,
	},
	{
		_id: '12',
		name: 'campaign 12',
		desc:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim sodales purus, sit amet tincidunt nunc maximus at. Phasellus vulputate condimentum elit sit amet pretium. Sed finibus faucibus aliquam. Donec venenatis efficitur augue, eget commodo metus suscipit eu. Pellentesque pellentesque sollicitudin dui vel feugiat. Aliquam viverra id lorem pellentesque dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam faucibus nunc convallis urna efficitur, eget placerat nisl iaculis. Nunc varius quam quis dolor euismod, eu euismod mi rhoncus. Cras sollicitudin et mi non imperdiet. Donec elementum ante et nulla scelerisque, vitae cursus ligula placerat. Ut nec lacus nec dolor ultricies varius eget nec enim. Aliquam venenatis nibh at nisl aliquet cursus. Maecenas tempor nisl vel pellentesque elementum. Proin euismod purus vel diam posuere tristique. Aliquam bibendum elementum egestas. Cras luctus, lectus vitae tempus eleifend, odio risus lacinia leo, sit amet tempus nibh lorem eleifend lectus. In libero purus, consequat ac neque vestibulum, commodo aliquet sem. Etiam ac lorem sagittis, ultricies est et, placerat massa.',

		rating: 4.0,
		numRating: 11,
	},
	{
		_id: '13',
		name: 'campaign 13',
		desc:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim sodales purus, sit amet tincidunt nunc maximus at. Phasellus vulputate condimentum elit sit amet pretium. Sed finibus faucibus aliquam. Donec venenatis efficitur augue, eget commodo metus suscipit eu. Pellentesque pellentesque sollicitudin dui vel feugiat. Aliquam viverra id lorem pellentesque dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam faucibus nunc convallis urna efficitur, eget placerat nisl iaculis. Nunc varius quam quis dolor euismod, eu euismod mi rhoncus. Cras sollicitudin et mi non imperdiet. Donec elementum ante et nulla scelerisque, vitae cursus ligula placerat. Ut nec lacus nec dolor ultricies varius eget nec enim. Aliquam venenatis nibh at nisl aliquet cursus. Maecenas tempor nisl vel pellentesque elementum. Proin euismod purus vel diam posuere tristique. Aliquam bibendum elementum egestas. Cras luctus, lectus vitae tempus eleifend, odio risus lacinia leo, sit amet tempus nibh lorem eleifend lectus. In libero purus, consequat ac neque vestibulum, commodo aliquet sem. Etiam ac lorem sagittis, ultricies est et, placerat massa.',

		rating: 4.0,
		numRating: 11,
	},
	{
		_id: '14',
		name: 'campaign 14',
		desc:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim sodales purus, sit amet tincidunt nunc maximus at. Phasellus vulputate condimentum elit sit amet pretium. Sed finibus faucibus aliquam. Donec venenatis efficitur augue, eget commodo metus suscipit eu. Pellentesque pellentesque sollicitudin dui vel feugiat. Aliquam viverra id lorem pellentesque dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam faucibus nunc convallis urna efficitur, eget placerat nisl iaculis. Nunc varius quam quis dolor euismod, eu euismod mi rhoncus. Cras sollicitudin et mi non imperdiet. Donec elementum ante et nulla scelerisque, vitae cursus ligula placerat. Ut nec lacus nec dolor ultricies varius eget nec enim. Aliquam venenatis nibh at nisl aliquet cursus. Maecenas tempor nisl vel pellentesque elementum. Proin euismod purus vel diam posuere tristique. Aliquam bibendum elementum egestas. Cras luctus, lectus vitae tempus eleifend, odio risus lacinia leo, sit amet tempus nibh lorem eleifend lectus. In libero purus, consequat ac neque vestibulum, commodo aliquet sem. Etiam ac lorem sagittis, ultricies est et, placerat massa.',

		rating: 4.0,
		numRating: 11,
	},
	{
		_id: '15',
		name: 'campaign 15',
		desc:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim sodales purus, sit amet tincidunt nunc maximus at. Phasellus vulputate condimentum elit sit amet pretium. Sed finibus faucibus aliquam. Donec venenatis efficitur augue, eget commodo metus suscipit eu. Pellentesque pellentesque sollicitudin dui vel feugiat. Aliquam viverra id lorem pellentesque dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam faucibus nunc convallis urna efficitur, eget placerat nisl iaculis. Nunc varius quam quis dolor euismod, eu euismod mi rhoncus. Cras sollicitudin et mi non imperdiet. Donec elementum ante et nulla scelerisque, vitae cursus ligula placerat. Ut nec lacus nec dolor ultricies varius eget nec enim. Aliquam venenatis nibh at nisl aliquet cursus. Maecenas tempor nisl vel pellentesque elementum. Proin euismod purus vel diam posuere tristique. Aliquam bibendum elementum egestas. Cras luctus, lectus vitae tempus eleifend, odio risus lacinia leo, sit amet tempus nibh lorem eleifend lectus. In libero purus, consequat ac neque vestibulum, commodo aliquet sem. Etiam ac lorem sagittis, ultricies est et, placerat massa.',

		rating: 4.0,
		numRating: 11,
	},
	{
		_id: '16',
		name: 'campaign 16',
		desc:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim sodales purus, sit amet tincidunt nunc maximus at. Phasellus vulputate condimentum elit sit amet pretium. Sed finibus faucibus aliquam. Donec venenatis efficitur augue, eget commodo metus suscipit eu. Pellentesque pellentesque sollicitudin dui vel feugiat. Aliquam viverra id lorem pellentesque dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam faucibus nunc convallis urna efficitur, eget placerat nisl iaculis. Nunc varius quam quis dolor euismod, eu euismod mi rhoncus. Cras sollicitudin et mi non imperdiet. Donec elementum ante et nulla scelerisque, vitae cursus ligula placerat. Ut nec lacus nec dolor ultricies varius eget nec enim. Aliquam venenatis nibh at nisl aliquet cursus. Maecenas tempor nisl vel pellentesque elementum. Proin euismod purus vel diam posuere tristique. Aliquam bibendum elementum egestas. Cras luctus, lectus vitae tempus eleifend, odio risus lacinia leo, sit amet tempus nibh lorem eleifend lectus. In libero purus, consequat ac neque vestibulum, commodo aliquet sem. Etiam ac lorem sagittis, ultricies est et, placerat massa.',

		rating: 4.0,
		numRating: 11,
	},
	{
		_id: '17',
		name: 'campaign 17',
		desc:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim sodales purus, sit amet tincidunt nunc maximus at. Phasellus vulputate condimentum elit sit amet pretium. Sed finibus faucibus aliquam. Donec venenatis efficitur augue, eget commodo metus suscipit eu. Pellentesque pellentesque sollicitudin dui vel feugiat. Aliquam viverra id lorem pellentesque dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam faucibus nunc convallis urna efficitur, eget placerat nisl iaculis. Nunc varius quam quis dolor euismod, eu euismod mi rhoncus. Cras sollicitudin et mi non imperdiet. Donec elementum ante et nulla scelerisque, vitae cursus ligula placerat. Ut nec lacus nec dolor ultricies varius eget nec enim. Aliquam venenatis nibh at nisl aliquet cursus. Maecenas tempor nisl vel pellentesque elementum. Proin euismod purus vel diam posuere tristique. Aliquam bibendum elementum egestas. Cras luctus, lectus vitae tempus eleifend, odio risus lacinia leo, sit amet tempus nibh lorem eleifend lectus. In libero purus, consequat ac neque vestibulum, commodo aliquet sem. Etiam ac lorem sagittis, ultricies est et, placerat massa.',

		rating: 4.0,
		numRating: 11,
	},
	{
		_id: '18',
		name: 'campaign 18',
		desc:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim sodales purus, sit amet tincidunt nunc maximus at. Phasellus vulputate condimentum elit sit amet pretium. Sed finibus faucibus aliquam. Donec venenatis efficitur augue, eget commodo metus suscipit eu. Pellentesque pellentesque sollicitudin dui vel feugiat. Aliquam viverra id lorem pellentesque dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam faucibus nunc convallis urna efficitur, eget placerat nisl iaculis. Nunc varius quam quis dolor euismod, eu euismod mi rhoncus. Cras sollicitudin et mi non imperdiet. Donec elementum ante et nulla scelerisque, vitae cursus ligula placerat. Ut nec lacus nec dolor ultricies varius eget nec enim. Aliquam venenatis nibh at nisl aliquet cursus. Maecenas tempor nisl vel pellentesque elementum. Proin euismod purus vel diam posuere tristique. Aliquam bibendum elementum egestas. Cras luctus, lectus vitae tempus eleifend, odio risus lacinia leo, sit amet tempus nibh lorem eleifend lectus. In libero purus, consequat ac neque vestibulum, commodo aliquet sem. Etiam ac lorem sagittis, ultricies est et, placerat massa.',

		rating: 4.0,
		numRating: 11,
	},
	{
		_id: '19',
		name: 'campaign 19',
		desc:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim sodales purus, sit amet tincidunt nunc maximus at. Phasellus vulputate condimentum elit sit amet pretium. Sed finibus faucibus aliquam. Donec venenatis efficitur augue, eget commodo metus suscipit eu. Pellentesque pellentesque sollicitudin dui vel feugiat. Aliquam viverra id lorem pellentesque dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam faucibus nunc convallis urna efficitur, eget placerat nisl iaculis. Nunc varius quam quis dolor euismod, eu euismod mi rhoncus. Cras sollicitudin et mi non imperdiet. Donec elementum ante et nulla scelerisque, vitae cursus ligula placerat. Ut nec lacus nec dolor ultricies varius eget nec enim. Aliquam venenatis nibh at nisl aliquet cursus. Maecenas tempor nisl vel pellentesque elementum. Proin euismod purus vel diam posuere tristique. Aliquam bibendum elementum egestas. Cras luctus, lectus vitae tempus eleifend, odio risus lacinia leo, sit amet tempus nibh lorem eleifend lectus. In libero purus, consequat ac neque vestibulum, commodo aliquet sem. Etiam ac lorem sagittis, ultricies est et, placerat massa.',

		rating: 4.0,
		numRating: 11,
	},
	{
		_id: '20',
		name: 'campaign 20',
		desc:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim sodales purus, sit amet tincidunt nunc maximus at. Phasellus vulputate condimentum elit sit amet pretium. Sed finibus faucibus aliquam. Donec venenatis efficitur augue, eget commodo metus suscipit eu. Pellentesque pellentesque sollicitudin dui vel feugiat. Aliquam viverra id lorem pellentesque dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam faucibus nunc convallis urna efficitur, eget placerat nisl iaculis. Nunc varius quam quis dolor euismod, eu euismod mi rhoncus. Cras sollicitudin et mi non imperdiet. Donec elementum ante et nulla scelerisque, vitae cursus ligula placerat. Ut nec lacus nec dolor ultricies varius eget nec enim. Aliquam venenatis nibh at nisl aliquet cursus. Maecenas tempor nisl vel pellentesque elementum. Proin euismod purus vel diam posuere tristique. Aliquam bibendum elementum egestas. Cras luctus, lectus vitae tempus eleifend, odio risus lacinia leo, sit amet tempus nibh lorem eleifend lectus. In libero purus, consequat ac neque vestibulum, commodo aliquet sem. Etiam ac lorem sagittis, ultricies est et, placerat massa.',

		rating: 4.0,
		numRating: 11,
	},
];

export default campaigns;
