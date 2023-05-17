import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';
import '../style/Categories.css';

const Categories = () => {
  const dispatch = useDispatch();

  const categoriesMessage = useSelector((state) => state.categories);

  const hanldeCheckStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <>
      <button type="button" onClick={hanldeCheckStatus}>Check Status</button>
      <div className="categories">{categoriesMessage}</div>
    </>
  );
};

export default Categories;
