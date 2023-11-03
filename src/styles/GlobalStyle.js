import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    }
    
    body {
    background-color: ${({ theme }) => theme.colors.primary};
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }

    /* ------ Common Classes ------ */
    .max-width{
        max-width: 1700px;
        margin: 0 auto;
    }
    
    .cur-po{
        cursor: pointer;
    }

    .flex-center-all{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .btn{
        padding: 1rem 2rem;
        font-size: 1.8rem;
        font-weight: bold;
        color: white;
        background-color: ${({ theme }) => theme.colors.textSecondary};
        border-radius: 1rem;
        border: 4px solid rgba(0,0,0,0.5);
        text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        box-shadow: 3px 3px rgba(0,0,0,0.2);
        white-space: nowrap;
        cursor: pointer;
        i{
            margin-left: 1rem;
            transition: all 0.3s;
        }
        &:hover i{
            margin-left: 2rem;
        }
    }

    .section-heading{
        font-size: 2rem;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.secondary};
        text-align: center;
    }

    .grid-three-col{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-gap: 10px;
        place-items: center;
    }
    
    .loading-gif {
        height: 10rem;
    }
    .error-img{
        height: 60rem;
    }
    /* ------ Scrollbar ------ */
    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.darkSectionBg};
        border-radius: 12px;
    }

    ::-webkit-scrollbar {
    background-color: ${({ theme }) => theme.colors.primaryBg};
    width: 10px;
    }

    @media (max-width: ${({ theme }) => theme.screens.sm}) {
        html {
            font-size: 52.5%;
        }

        @media (max-width: ${({ theme }) => theme.screens.ss}) {
            .grid-three-col {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        @media (max-width: ${({ theme }) => theme.screens.xs}) {
            html{
                font-size: 40.5%;
            }
        }
    }
    @media (min-width: ${({ theme }) => theme.screens.lg}){
        .grid-three-col{
            grid-template-columns: repeat(4, 1fr);
        }
    }
`;
