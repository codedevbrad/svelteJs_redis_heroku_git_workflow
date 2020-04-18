<script>
import axios from 'axios';

let dbData = [ ];
let dataSet = false;

async function getDataFromDb() {
      try {
        return await axios.get("http://localhost:5050/api/getData")
          .then( res => res.data );
      }
      catch ( err ) {
        throw err;
      }
}

async function handleClickFromBtn() {

      await getDataFromDb()
              .then( res => {
                let { set , data } = res;
                dbData = set ? JSON.parse( data ) : data;
                dataSet = set;
              })
              .catch( err => console.log( err ));
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
