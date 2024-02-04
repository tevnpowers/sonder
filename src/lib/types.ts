export interface Post {
	id: string,
	author: string,
	name: string,
	description: string,
	genre: Genre[],
	connections: Connection[],
	html: string,
	access: Access,
	published: boolean,
	votes: number,
	score: number
}

export interface Connection {
	id: string,
	span?: number[] // optional for now
}

export enum Access {
	public,
	private,
	unlisted,
	restricted
}

export enum Genre {
	Fiction,
	NonFiction,
	Children,
	YoungAdult,
	Adult,
	Comedy,
	Romance,
	Drama,
	History
}