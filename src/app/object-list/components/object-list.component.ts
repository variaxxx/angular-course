import { Component } from '@angular/core';

@Component({
	selector: 'my-object-list',
	templateUrl: './object-list.component.html',
	styleUrls: ['./object-list.component.scss']
})
export class MyObjectListComponent {

	public myObjects = myObjects;

	public redirectTo(id: number): void {
		
	}
}

export const myObjects: MyObject[] = [
	{
		title: "first",
		content: "Hey sexy lady",
		id: 1
	},
	{
		title: "second",
		content: "hi hi hi",
		id: 2
	},
	{
		title: "third",
		content: "Hahaha",
		id: 3
	},
	{
		title: "fourth",
		content: "Blah blah",
		id: 4
	}
]

export interface MyObject {
	title: string,
	content: string,
	id: number
}