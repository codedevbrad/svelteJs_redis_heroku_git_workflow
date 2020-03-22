<script>
	export let name , data;
</script>

<main>
		<h1>Hello {name}!</h1>
		<ul>
			{ #each data as dataIndividual }
				<li> { dataIndividual } </li>
			{/each}
		</ul>
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
