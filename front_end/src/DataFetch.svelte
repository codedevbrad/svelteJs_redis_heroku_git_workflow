<script>

let dbData = [ ];
let dataSet = false;

async function getDataFromDb() {
  try {
      const res  = await fetch("http://localhost:5050/api/getData");
      const text = await res.json();
      return text;

  } catch ( err ) {
      console.log(err);
  }
}

async function handleClickFromBtn() {
    let { set , data } = await getDataFromDb();
    dbData = set ? JSON.parse( data ) : data;
    dataSet = set;
}

</script>

<main>

  <h3> get data from server and cache with redis </h3>
  <button on:click={handleClickFromBtn}>
    generate rata from db endpoint.
  </button>

  <ul>
   <li> data was retrieved from redis: { dataSet } </li>
    { #each dbData as dataEach }
      <li> { dataEach.name } </li>
    {/each}
  </ul>

</main>
