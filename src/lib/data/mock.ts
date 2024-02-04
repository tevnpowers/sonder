import { Access, Genre, type Post } from "$lib/types";
import { v4 as uuidv4 } from 'uuid';

export const mock_posts: Post[] = [
	{
		id: '0',
		name: "The Original Humpty Dumpty",
		author: "Unknown",
		description: "The story we all know and love.",
		genre: [Genre.Children],
		connections: [],
		html: `<p>Humpty Dumpty sat on a wall,</p>
				<p>Humpty Dumpty had a great fall;</p>
				<p>All the king's horses and all the king's men</p>
				<p>Couldn't put humpty together again</p>`,
		access: Access.public,
		published: true,
		votes: 0,
		score: 0
	}
]