import { MockedProvider } from '@apollo/client/testing';
import Home from '../index';
import COUNTRY_QUERY from '../../graphql/country_query';
import MISSION_QUERY from '../../graphql/mission_query';
import '@testing-library/jest-dom/extend-expect'
import { render, act } from '@testing-library/react'
import renderer from 'react-test-renderer';

describe('Home Page', () => {
    describe('final state', () => {
        it('should render the country data from graphql if it exists', async () => {
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

            await act(async () => {

                const { getByText } = render(
                    <MockedProvider mocks={[mock]} addTypename={false}>
                        <Home />
                    </MockedProvider>,
                );

                await new Promise(resolve => setTimeout(resolve, 0));

                const country = getByText("Fooland");
                expect(country).toBeInTheDocument();
            })
        });
    });

    describe('error state', () => {
        it('should render the error state', async () => {
            const mockError = {
                request: {
                    query: MISSION_QUERY,
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
        it('should render the loading state', async () => {
            const { getByTestId } = render(
                <MockedProvider mocks={[]}>
                    <Home />
                </MockedProvider>,
            );

            await act(async () => {
                const loading = getByTestId('loading');
                expect(loading).toBeInTheDocument();
            })
        });
    });
});
