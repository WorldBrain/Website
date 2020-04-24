import styled from 'styled-components';

const HoverMenu = styled.li`
    position: relative;

    .sub-menu {
        display: none;
        position: absolute;
        left: 50%;
        top: 30px;
        transform: translateX(-50%);
        width: fit-content;
        background-color: #fff;
        padding: 10px;
        border-radius: 3px;
        box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.2);
        margin-left: 0px;
    }

    & li {
        white-space: nowrap;
        padding-left: 0px !important;
    }

    &:hover {
        .sub-menu {
            display:block
        }
    }
`;

export { HoverMenu };

export default HoverMenu;
