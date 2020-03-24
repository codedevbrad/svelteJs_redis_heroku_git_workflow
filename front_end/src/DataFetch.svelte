<script>

let dbData = [ ];

async function getDataFromDb() {
  try {
      const res  = await fetch("http://localhost:5050/api/getData");
      const text = await res.json();
      console.log( text );
      return text;

  } catch ( err ) {
      console.log(err);
  }
}

async function handleClickFromBtn() {
    dbData = await getDataFromDb();
}

</script>

<main>

  <h3> get data from server and cache with rediss </h3>
  <button on:click={handleClickFromBtn}>
    generate rata from db endpoint.
  </button>
  <ul>
    { #each dbData as dataEach }
      <li> { dataEach.name } </li>
    {/each}
  </ul>

</main>
