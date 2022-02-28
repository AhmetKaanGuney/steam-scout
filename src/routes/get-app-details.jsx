import { useParams } from 'react-router-dom';
import AppDetails from '../components/AppDetails.js';

export default function GetAppDetails() {
  let params = useParams();
  let appid = parseInt(params.appid)
  console.log(params)
  return (
    <main>
      <AppDetails appid={appid} />
    </main>
  )
}
