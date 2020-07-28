import { MockedProvider } from '@apollo/client/testing';
import Home from '../index';
import COUNTRY_QUERY from '../../graphql/country_query';
import { renderHook } from '@testing-library/react-hooks';
import '@testing-library/jest-dom/extend-expect'
import { render, act, fireEvent } from '@testing-library/react'

describe('Home Page', () => {
    describe('error state', () => {
        it('should render the error state if an error is thrown', async () => {
            const mockError = {
                request: {
                    query: COUNTRY_QUERY,
                },
                error: () => { throw new Error('some error occured') },
            };

            const { getByText } = render(
                <MockedProvider mocks={[mockError]} addTypename={false}>
                    <Home />
                </MockedProvider>,
            );

            await act(async () => {
                await new Promise(resolve => setTimeout(resolve, 0));
                const error = getByText('Error fetching data!');
                expect(error).toBeInTheDocument();
            })
        });
    });

    describe('loading state', () => {
        // Assignment 2: How to mock a loading state with the MockedProvider and test the loading messaage is rendered
        xit('should render the loading message if in a loading state', async () => {
        });
    });

    describe('final state', () => {
        const mock = {
            request: {
                query: COUNTRY_QUERY,
            },
            result: {
                data: {
                    country:
                    {
                        name: "Fooland",
                        capital: "Bar"
                    }

                },
            },
        };

        it('renders the country data from graphql if it exists', async () => {
            await act(async () => {

                const { getByTestId } = render(
                    <MockedProvider mocks={[mock]} addTypename={false}>
                        <Home />
                    </MockedProvider>,
                );

                await new Promise(resolve => setTimeout(resolve, 0));

                const country = getByTestId("countryInput");
                expect(country.value).toBe("FOOLAND");
            })
        });

        // Assignment 3: The below unit test checks the behavior when a user submits the encryption form
        // However, there are a few things that can be improved with this tests.
        // There are multiple assertions and the test may be brittle because it is is required to know how the caesarCipher works
        // If valid business logic changes (ie new encryption method) this test will break
        // Additionally, the logic for caesarCipher should be tested as its own unit
        // Refactor this test so we can mock out the encrypt class and only test for the display logic
        it('renders the encrypted value if the form is submited', async () => {
            await act(async () => {
                const { waitForNextUpdate } = renderHook(() => useState());
                const { getByTestId, getByText } = render(
                    <MockedProvider mocks={[mock]} addTypename={false}>
                        <Home />
                    </MockedProvider>,
                );

                await new Promise(resolve => setTimeout(resolve, 0));

                const offsetKey = getByTestId("offsetKey");
                fireEvent.change(offsetKey, { target: { value: 2 } });

                fireEvent.click(getByTestId('button'));
                await waitForNextUpdate;

                const encrypted = getByText(/HQQNCPF/i);
                expect(encrypted).toBeInTheDocument();
            });
        });

        // Assignment 4: There is a bug with the form as there is no input validation on the offset key. 
        // Write the test and corresponding code to validate bad input and show a user a message
    });
});
