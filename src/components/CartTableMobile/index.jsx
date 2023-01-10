import { useEffect, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import {
    ButtonCheckout,
    ButtonInput,
    DivNumberInput,
    LinkTitle,
    TableCart,
    TableTotal,
    TdStyled,
    TitleH3,
    TrStyled,
} from './styles';

const CartTableMobile = () => {
    const price = 2.26;
    const price01 = 2.26;
    const [quantity, setQuantity] = useState(3);
    const [quantity01, setQuantity01] = useState(2);

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
            <TableCart className="mb-4">
                {quantity >= 1 && (
                    <tbody>
                        <TrStyled>
                            <th>Product</th>
                            <TdStyled className="fs-4">
                                <LinkTitle to="/product">Salad</LinkTitle>
                            </TdStyled>
                        </TrStyled>
                        <tr>
                            <th>Weight</th>
                            <TdStyled>0.4 kg </TdStyled>
                        </tr>
                        <TrStyled>
                            <th>Quantity</th>
                            <TdStyled>
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
                            </TdStyled>
                        </TrStyled>
                        <tr>
                            <th>Price</th>
                            <TdStyled>$ {price} </TdStyled>
                        </tr>
                        <TrStyled>
                            <th>Total</th>
                            <TdStyled>$ {total.toFixed(2)} </TdStyled>
                        </TrStyled>
                        <tr>
                            <th> </th>
                            <TdStyled>
                                <ButtonInput
                                    type="button"
                                    onClick={() =>
                                        setQuantity(() => quantity === 0)
                                    }
                                >
                                    <AiFillCloseCircle color="#97ae76" />
                                </ButtonInput>
                            </TdStyled>
                        </tr>
                    </tbody>
                )}
            </TableCart>
            <TableCart className="mb-5">
                {quantity01 >= 1 && (
                    <tbody className="mt-4">
                        <TrStyled>
                            <th>Product</th>
                            <TdStyled className="fs-4">
                                <LinkTitle to="/product">Apple</LinkTitle>
                            </TdStyled>
                        </TrStyled>
                        <tr>
                            <th>Weight</th>
                            <TdStyled>0.4 kg </TdStyled>
                        </tr>
                        <TrStyled>
                            <th>Quantity</th>
                            <TdStyled>
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
                            </TdStyled>
                        </TrStyled>
                        <tr>
                            <th>Price</th>
                            <TdStyled>$ {price01} </TdStyled>
                        </tr>
                        <TrStyled>
                            <th>Total</th>
                            <TdStyled>$ {total01.toFixed(2)} </TdStyled>
                        </TrStyled>
                        <tr>
                            <th> </th>
                            <TdStyled>
                                <ButtonInput
                                    type="button"
                                    onClick={() =>
                                        setQuantity01(() => quantity01 === 0)
                                    }
                                >
                                    <AiFillCloseCircle color="#97ae76" />
                                </ButtonInput>
                            </TdStyled>
                        </tr>
                    </tbody>
                )}
            </TableCart>
            <div>
                <TitleH3 className="py-3">Cart Total</TitleH3>
                <TableTotal>
                    <tbody>
                        <tr>
                            <th>Subtotal</th>
                            <TdStyled>$ {subtotal.toFixed(2)}</TdStyled>
                        </tr>
                        <tr>
                            <th>Total</th>
                            <TdStyled>$ {subtotal.toFixed(2)}</TdStyled>
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

export default CartTableMobile;
