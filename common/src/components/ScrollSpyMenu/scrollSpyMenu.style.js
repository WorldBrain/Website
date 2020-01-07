import styled from 'styled-components';

const HoverMenu = styled.li`
    position: relative;

    .sub-menu {
        display: none;
        position: absolute;
        left: 50%;
        top: 25px;
        transform: translateX(-50%);
        width: 120px;
        background-color: #fff;
        padding: 10px;
        border-radius: 3px;
        box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.2);
    }

    &:hover {
        .sub-menu {
            display:block
        }
    }
`;

export { HoverMenu };

export default HoverMenu;
