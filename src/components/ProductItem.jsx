import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { BiTrash } from "react-icons/bi";
import convertCodeToSymbol from "../utils/currencySymbolToCodeConverter";
import EditableField from "./EditableField";
const ItemRow = (props) => {
  const onDelEvent = () => {
    props.onDelEvent(props.item);
  };
  return (
    <tr>
      <td style={{ width: "100%" }}>
        <EditableField
          onItemizedItemEdit={(evt) =>
            props.onItemizedItemEdit(evt, props.item.id)
          }
          cellData={{
            type: "text",
            name: "productName",
            placeholder: "Product name",
            value: props.item.productName,
            id: props.item.itemId,
          }}
        />
        <EditableField
          onItemizedItemEdit={(evt) =>
            props.onItemizedItemEdit(evt, props.item.id)
          }
          cellData={{
            type: "text",
            name: "productDescription",
            placeholder: "Product description",
            value: props.item.productDescription,
            id: props.item.id,
          }}
        />
      </td>
      <td style={{ minWidth: "70px" }}>
        <EditableField
          onItemizedItemEdit={(evt) =>
            props.onItemizedItemEdit(evt, props.item.id)
          }
          cellData={{
            type: "number",
            name: "productQuantity",
            min: 1,
            step: "1",
            value: props.item.productQuantity,
            id: props.item.id,
          }}
        />
      </td>
      <td style={{ minWidth: "130px" }}>
        <EditableField
          onItemizedItemEdit={(evt) =>
            props.onItemizedItemEdit(evt, props.item.id)
          }
          cellData={{
            leading: convertCodeToSymbol(props.currency),
            type: "number",
            name: "productPrice",
            min: 1,
            step: "0.01",
            presicion: 2,
            textAlign: "text-end",
            value: props.item.productPrice,
            id: props.item.id,
          }}
        />
      </td>
      <td className="text-center" style={{ minWidth: "50px" }}>
        <BiTrash
          onClick={onDelEvent}
          style={{ height: "33px", width: "33px", padding: "7.5px" }}
          className="text-white mt-1 btn btn-danger"
        />
      </td>
    </tr>
  );
};

const ProductItem = (props) => {
  const { onItemizedProductEdit, currency, onRowDel, items, onRowAdd } = props;

  const itemTable = items.map((item) => (
    <ItemRow
      key={item.id}
      item={item}
      onDelEvent={onRowDel}
      onItemizedItemEdit={onItemizedProductEdit}
      currency={currency}
    />
  ));

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>PRODUCT</th>
            <th>QTY</th>
            <th>PRICE/RATE</th>
            <th className="text-center">ACTION</th>
          </tr>
        </thead>
        <tbody>{itemTable}</tbody>
      </Table>
      <Button className="fw-bold" onClick={onRowAdd}>
        Add New Product
      </Button>
    </div>
  );
};

export default ProductItem;
