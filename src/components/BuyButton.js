import React, { useState } from 'react';

var BuyButton = React.memo(({post, images}) => {
  const [selected, setSelected] = useState(post.customFields.values[0]);
  var filteredImgs = images.filter(x => x.name == selected);
  var choosenImgSrc = filteredImgs.length > 0
    ? filteredImgs[0].src
    : images[0].src

  return (
    <div>
        <img src={choosenImgSrc} width="400px"></img>
        <h3>{post.customFields.name}</h3>
        <select 
            id={post.customFields.name} 
            onChange={(e) => setSelected(e.target.value)} 
            value={selected}
            style={{
                borderRadius: "5px",
                paddingRight: "20px",
                paddingBlockStart: "13px",
                paddingBlockEnd: "13px",
                marginRight: "15px"
            }}>
            {post.customFields.values.map((x) => (<option key={x}>{x}</option>))}
        </select>

        <a
        style={{
            backgroundColor: "#212121",
            borderRadius: "5px",
            color: "#F5F5F5",
            fontWeight: "bold",
            paddingBottom: "15px",
            paddingTop: "15px",
            paddingRight: "35px",
            paddingLeft: "35px",
            fontSize: "24"
        }}
        id="buyButton"
        href='#' 
        className='snipcart-add-item buyBtn'
        data-item-id={post.id}
        data-item-price={post.price}
        data-item-image={choosenImgSrc}
        data-item-name={post.title}
        data-item-description={post.description}
        data-item-custom1-name={post.customFields.name}
        data-item-custom1-value={selected}
        data-item-url={"http://localhost:9000" + post.path + "#!/"}>
        Buy for {post.price}$
    </a>
    </div>
  )
})

export default BuyButton;