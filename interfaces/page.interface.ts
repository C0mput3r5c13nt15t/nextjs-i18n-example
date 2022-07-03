import {landing} from "./components.interface";

export interface page {
  title: string;
  route: string;
  description: string;
  components: (landing)[];
}