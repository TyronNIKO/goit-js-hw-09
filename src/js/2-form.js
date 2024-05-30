'use strict';
class Form {
	formData = { email: '', message: '' };
	key = 'feedback-form-state';
	constructor(selector) {
		this.form = document.querySelector(selector);
		this.elements = this.form.elements;
		this.keys = Object.keys(this.form.elements).filter(key => isNaN(key));
	}
	collectInputsValue(key) {
		return this.elements[key].value;
	}
	writeLS(key, value) {
		value = value.trim();
		localStorage.setItem(key, value);
	}
	readLS(key) {
		localStorage.getItem(key);
	}
	init() {
		this.readLS(this.key);
		this.form.addEventListener('input', e => {
			console.log(e.target);
			const value = e.target.value;
			this.writeLS(this.key, value);
		});
		this.form.addEventListener('submit', e => {
			e.preventDefault();
			const obj = {};
			let hasEmptyField = false;
			this.keys.forEach(key => {
				const value = this.collectInputsValue(key);
				obj[key] = value;
				if (!value) {
					hasEmptyField = true;
				}
			});

			if (hasEmptyField) {
				alert('All form fields must be filled in');
			} else {
				console.log(obj);
				this.form.reset();
			}
		});
	}
}
export default Form;
