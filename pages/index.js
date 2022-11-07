//useSWR allows the use of SWR inside function components
import useSWR from 'swr';
import styles from './../styles/Home.module.css'
import Footer from './componets/Footer';

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  var rec;
  //Set up SWR to run the fetcher function when calling "/api/staticdata"
  //There are 3 possible states: (1) loading when data is null (2) ready when the data is returned (3) error when there was an error fetching the data
  const { data, error } = useSWR('/api/staticdata', fetcher);

  //Handle the error state
  if (error) return <div>Failed to load</div>;
  //Handle the loading state
  if (!data) return <div>Loading...</div>;
  rec = JSON.parse(data)
  //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
  return (
    <>
      <main className={styles.main}>
        <div>
          <h1>Hi , I am <span className={styles.name}><h3 className={styles.animate}>{rec.profile.name}</h3></span></h1>
          
          <p> I am
            <span > 𝔽𝕦𝕝𝕝 𝕤𝕥𝕒𝕔𝕜 𝕕𝕖𝕧𝕖𝕝𝕠𝕡𝕖𝕣 .</span> <br/>
             If debugging is the process of removing bugs , <br/> 
           then programming must be the process of putting them in.
          </p>
          
         </div>
      </main>
    </>


  );
}
