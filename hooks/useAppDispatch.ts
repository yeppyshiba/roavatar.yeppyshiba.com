import { useDispatch } from "react-redux";
import type { AppDispatch } from "@stores/store";

const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
