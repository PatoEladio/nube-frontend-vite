import { useContext } from "react";
import CloudContext from "../context/CloudContext";

function useCloud() {
  const {route, setRoute} = useContext(CloudContext)

}