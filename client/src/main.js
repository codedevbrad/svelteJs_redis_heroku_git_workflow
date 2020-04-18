import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world' ,
		data: [ 'date' , 'age' ]
	}
});

export default app;
