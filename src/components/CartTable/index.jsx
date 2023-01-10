import { useEffect, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import {
    ButtonCheckout,
    ButtonInput,
    DivNumberInput,
    ImageBorder,
    LinkTitle,
    TableCart,
    TableTotal,
    TitleH3,
} from './styles';
import Salad from '../../assets/products/thumb-cart-01.jpg';
import Apple from '../../assets/products/thumb-cart-02.jpg';

const CartTable = () => {
    const price = 2.26;
    const price01 = 2.26;
    const [quantity, setQuantity] = useState(3);
    const [quantity01, setQuantity01] = useState(2);

    // const handleQuantity = useCallback(async () => {
    //     setQuantity(quantity);
    // }, [setQuantity, quantity]);

    const total = price * quantity;
    const total01 = price01 * quantity01;
    const subtotal = total + total01;

    useEffect(() => {
        total;
        total01;
        quantity;
        quantity01;
        subtotal;
    }, [total, total01, quantity, quantity01, subtotal]);

    return (
        <>
            <TableCart className="mb-5">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th> </th>
                        <th>Weight</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {quantity >= 1 && (
                        <tr>
                            <td>
                                <ImageBorder src={Salad} alt="salad" />
                            </td>
                            <td className="fs-4">
                                <LinkTitle to="/product">Salad</LinkTitle>
                            </td>
                            <td>0.4 kg </td>
                            <td>
                                <DivNumberInput>
                                    <ButtonInput
                                        type="button"
                                        onClick={() =>
                                            setQuantity(() => quantity - 1)
                                        }
                                    >
                                        -
                                    </ButtonInput>
                                    <p>{quantity}</p>
                                    <ButtonInput
                                        type="button"
                                        onClick={() =>
                                            setQuantity(() => quantity + 1)
                                        }
                                    >
                                        +
                                    </ButtonInput>
                                </DivNumberInput>
                            </td>
                            <td>$ {price} </td>
                            <td>$ {total.toFixed(2)} </td>
                            <td>
                                <ButtonInput
                                    type="button"
                                    onClick={() =>
                                        setQuantity(() => quantity === 0)
                                    }
                                >
                                    <AiFillCloseCircle color="#97ae76" />
                                </ButtonInput>
                            </td>
                        </tr>
                    )}
                    {quantity01 >= 1 && (
                        <tr>
                            <td>
                                <ImageBorder src={Apple} alt="apple" />
                            </td>
                            <td className="fs-4">
                                <LinkTitle to="/product">Apple</LinkTitle>
                            </td>
                            <td>0.4 kg </td>
                            <td>
                                <DivNumberInput>
                                    <ButtonInput
                                        type="button"
                                        onClick={() =>
                                            setQuantity01(() => quantity01 - 1)
                                        }
                                    >
                                        -
                                    </ButtonInput>
                                    <p>{quantity01}</p>
                                    <ButtonInput
                                        type="button"
                                        onClick={() =>
                                            setQuantity01(() => quantity01 + 1)
                                        }
                                    >
                                        +
                                    </ButtonInput>
                                </DivNumberInput>
                            </td>
                            <td>$ {price01} </td>
                            <td>$ {total01.toFixed(2)} </td>
                            <td>
                                <ButtonInput
                                    type="button"
                                    onClick={() =>
                                        setQuantity01(() => quantity01 === 0)
                                    }
                                >
                                    <AiFillCloseCircle color="#97ae76" />
                                </ButtonInput>
                            </td>
                        </tr>
                    )}
                </tbody>
                {/* <tfoot>
                    <tr>
                        <td>botão 01 </td>
                        <td>botão 01</td>
                        <td>$ </td>
                        <td>$ </td>
                        <td>$ </td>
                        <td>botão 03 </td>
                    </tr>
                </tfoot> */}
            </TableCart>
            <div>
                <TitleH3 className="py-3">Cart Total</TitleH3>
                <TableTotal>
                    <tbody>
                        <tr>
                            <th>Subtotal</th>
                            <td>$ {subtotal.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <th>Total</th>
                            <td>$ {subtotal.toFixed(2)}</td>
                        </tr>
                    </tbody>
                </TableTotal>
                <ButtonCheckout type="button" className="mt-3">
                    PROCEED TO CHECKOUT
                </ButtonCheckout>
            </div>
        </>
    );
};

export default CartTable;
