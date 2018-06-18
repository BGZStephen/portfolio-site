import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'home-intro',
	template: require('./home-intro.html'),
})
export class HomeIntro implements OnInit {
	buildOptions: Array<string>;
	buildText: string;
	textAnimation: number = 1000;

	constructor() {
		this.buildText = ' stuff';
		this.buildOptions = [
			' Web apps',
			' Mobile apps',
			' Desktop apps',
			' Scalable APIs',
			' Websites',
		];
	}

	ngOnInit() {
		setTimeout(this.unsetBuildText, 5000);
	}

	setBuildText = string => {
		console.log(string);
		let i = 0;
		const textBuildInterval = setInterval(() => {
			if (this.buildText.length === string.length) {
				clearInterval(textBuildInterval);
				setTimeout(this.unsetBuildText, 5000);
			} else {
				this.buildText = this.buildText += string[i];
				i += 1;
			}
		}, this.textAnimation / string.length);
	};

	unsetBuildText = () => {
		const spliceInterval = 500 / this.buildText.length;
		const removeTimeout = setInterval(() => {
			if (this.buildText.length === 0) {
				clearInterval(removeTimeout);
				setTimeout(() => this.setBuildText(this.getRandomBuildText()), 1000);
			} else {
				this.buildText = this.buildText.substr(0, this.buildText.length - 1);
			}
		}, spliceInterval);
	};

	getRandomBuildText = () => {
		return this.buildOptions[
			Math.floor(Math.random() * this.buildOptions.length)
		];
	};
}
