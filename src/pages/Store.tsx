import storedItems from "../data/items.json"
import { Col, Row } from "react-bootstrap";
import StoreItem from "../component/StoreItem";


const Store = () => {
    return (
        <>
            <h3>Store</h3>
            <Row md={2} xs={1} lg={3} className="g-3">
                {storedItems.map(item=>(
                    <Col key={item.id}><StoreItem {...item}/></Col>
                ))}
            </Row>
        </>
    );
};

export default Store;