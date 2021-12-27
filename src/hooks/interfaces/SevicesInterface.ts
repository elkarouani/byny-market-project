import Service from "../entities/Service";

export default interface ServicesInterface {
    allServices: Service[];
    loadAllServices: () => void;
}