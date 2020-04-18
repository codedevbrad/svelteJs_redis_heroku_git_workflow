
<script>

    import DataFetch from './DataFetch.svelte';

		export let name , data;
		let object = false;

		async function getData() {
			try {
					const res  = await fetch('https://jsonplaceholder.typicode.com/todos/1');
					const text = await res.json();
					console.log( text );
					return text;

			} catch ( err ) {
					throw new Error( err );
			}
		}

		async function handleClick() {
				object = await getData();
		}
</script>

<main>
		<h1>Hello {name}!</h1>
		<ul>
			{ #each data as dataIndividual }
				<li> { dataIndividual } </li>
			{/each}
		</ul>
		<button on:click={handleClick}>
			generate rata from fake endpoint.
		</button>
		<p>{ object ? object.title : 'no data' } hey </p>

		<DataFetch />

</main>


<style>

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

</style>
