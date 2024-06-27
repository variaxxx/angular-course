import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'my-object-list',
	templateUrl: './object-list.component.html',
	styleUrls: ['./object-list.component.scss']
})
export class MyObjectListComponent {

	constructor(private router: Router, private route: ActivatedRoute) {}

	public myObjects = myObjects;

	public redirectTo(id: number): void {
		this.router.navigate([`${id}`], {relativeTo: this.route})
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
	},
	{
		title: 'News',
		content: "В Башкирии парень съел шаурму и чуть не умер. У него отказало несколько органов, он впал в кому и пролежал в больнице несколько месяцев. Съев шаурму в одном из кафе Салавата ещё в апреле, парню стало плохо. Пролежав дома несколько дней, его забрала скорая, к тому моменту он уже был в коме — у него отказали печень, почки и лёгкие. Оказалось, что в шаурме была сальмонелла. Выйдя из комы и пролежав в больнице несколько месяцев, парень подал на кафе в суд и получил компенсацию в 800 тысяч рублей. Теперь его ждёт долгое восстановление, строгая диета и дорогие лекарства.",
		id: 5
	}
]

export interface MyObject {
	title: string,
	content: string,
	id: number
}