import { useSelector } from 'react-redux';
import '../style/Categories.css';

const Categories = () => {
  const categoriesMessage = useSelector((state) => state.categories);

  return (
    <>
      <div className="categoriesCont">
        <div className="categories">{categoriesMessage}</div>
      </div>
    </>
  );
};

export default Categories;
