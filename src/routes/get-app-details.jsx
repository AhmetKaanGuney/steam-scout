import { useParams } from 'react-router-dom';
import AppDetails from '../appdata/appDetails.js';

export default function GetAppDetails() {
  const {appid} = useParams();
  return (
    <main>
      <AppDetails appid={appid} />
    </main>
  )
}
