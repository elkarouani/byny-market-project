import Service from "../entities/Service";
import ServicesInterface from "../interfaces/SevicesInterface";

const servicesInitialState: ServicesInterface = {
  allServices: [new Service()],
};

export default servicesInitialState;