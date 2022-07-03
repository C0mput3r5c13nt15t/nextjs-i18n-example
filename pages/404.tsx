import LandingComponent from "../components/content-components/landing.component";
import { landing } from "../interfaces/components.interface";

export default function NotFound() {
  const pageNotFoundLanding: landing = {
    kind: 'landing',
    title: 'Language not found',
    subtitle: 'Please try another language',
  }
  return (
    <LandingComponent landing={pageNotFoundLanding}/>
  );
}