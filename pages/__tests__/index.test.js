import { MockedProvider } from '@apollo/client/testing';
import Home from '../index';
// import FOOTER_LINKS from '../_gql_query/FOOTER_LINKS';
import '@testing-library/jest-dom/extend-expect'
import { render, act } from '@testing-library/react'

describe('Home', () => {
    // describe('final state', () => {
    //     it('should render the footer data from graphql if it exists', async () => {
    //         const mock = {
    //             request: {
    //                 query: FOOTER_LINKS,
    //                 variables: {
    //                     visible: [true]
    //                 }
    //             },
    //             result: {
    //                 data: {
    //                     footerMenuLinks: [
    //                         {
    //                             Name: "foo",
    //                             page: {
    //                                 URL: "foo.com"
    //                             }
    //                         }
    //                     ]
    //                 },
    //             },
    //         };

    //         await act(async () => {

    //             const { getByText } = render(
    //                 <MockedProvider mocks={[mock]} addTypename={false}>
    //                     <GlobalFooter />
    //                 </MockedProvider>,
    //             );

    //             await new Promise(resolve => setTimeout(resolve, 0));

    //             const link = getByText(/foo/i);
    //             expect(link).toBeInTheDocument();
    //             expect(link.href).toContain("/foo.com");
    //         })
    //     });
    // });

    describe('loading state', () => {
        it('should render the loading state', () => {
            const { getByTestId } = render(
                <MockedProvider mocks={[]}>
                    <Home />
                </MockedProvider>,
            );

            const loading = getByTestId('loading');
            expect(loading).toBeInTheDocument();
        });
    });
});
