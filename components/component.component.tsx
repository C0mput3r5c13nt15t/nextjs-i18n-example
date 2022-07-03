import {object} from "prop-types";
import {landing} from "../interfaces/components.interface";
import LandingComponent from "./content-components/landing.component";

export default function ComponentComponent({ component }: { component: (landing) }) {
  return (
    <>
      {
        (() => {
          switch (component.kind) {
            case "landing":
              return <LandingComponent landing={component}/>;
            default:
              return (
                <p>{JSON.stringify(component)}</p>
              );
          }
        })()
      }
    </>
  );
}

ComponentComponent.propTypes = {
  component: object,
};