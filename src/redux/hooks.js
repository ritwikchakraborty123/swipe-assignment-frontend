import { useSelector } from "react-redux";
import { selectCurrency } from "./currencySlice";
import { selectInvoiceList } from "./invoicesSlice";
import { selectProductList } from "./productSlice";

export const useInvoiceListData = () => {
  const invoiceList = useSelector(selectInvoiceList);
  const productList = useSelector(selectProductList);
  const getCurrentCurrency = useSelector(selectCurrency);

  const getOneInvoice = (receivedId) => {
    return (
      invoiceList.find(
        (invoice) => invoice.id.toString() === receivedId.toString()
      ) || null
    );
  };
  const getOneProduct = (receivedId) => {
    return (
      productList.find(
        (product) => product.id.toString() === receivedId.toString()
      ) || null
    );
  };
  const getAllProducts = () => {
    return productList;
  };

  const listSize = invoiceList.length;

  return {
    invoiceList,
    getOneInvoice,
    listSize,
    productList,
    getOneProduct,
    getAllProducts,
    getCurrentCurrency,
  };
};
