import { MainContainer } from "./HeaderBreadcrumb.style";

function HeaderBreadcrumb({ trail }) {
    
  return (
    <MainContainer>
      {trail.map((item, index) => (
        <span key={index}>
          <a href={item.link}>{item.label}</a>
          {index < trail.length - 1 && (<label>{" > "}</label>)}
        </span>
      ))}
    </MainContainer>
  );
}

export default HeaderBreadcrumb;

