import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { withPrefix, Link } from "gatsby"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes} 
      className="home page-template-default page page-id-8547 woocommerce-no-js 
      yith-ctpw elementor-default elementor-page elementor-page-8547 th-sticky-header
      loaded headhesive
      ">
        
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}

      
        <Helmet>
        
        <script src={withPrefix('/js/jquery-1.12.4-wp.js')} type="text/javascript" />

        </Helmet>

        {/*<script
        dangerouslySetInnerHTML={{
            __html: `
            var ParticleThemesData = {
            "11": "{\n        \"particles\": {\n          \"number\": {\n            \"value\": 160,\n            \"density\": {\n              \"enable\": true,\n              \"value_area\": 800\n            }\n          },\n          \"color\": {\n            \"value\": \"#ffffff\"\n          },\n          \"shape\": {\n            \"type\": \"circle\",\n            \"stroke\": {\n              \"width\": 0,\n              \"color\": \"#000000\"\n            },\n            \"polygon\": {\n              \"nb_sides\": 5\n            },\n            \"image\": {\n              \"src\": \"img\/github.svg\",\n              \"width\": 100,\n              \"height\": 100\n            }\n          },\n          \"opacity\": {\n            \"value\": 0.5,\n            \"random\": false,\n            \"anim\": {\n              \"enable\": false,\n              \"speed\": 1,\n              \"opacity_min\": 0.1,\n              \"sync\": false\n            }\n          },\n          \"size\": {\n            \"value\": 3,\n            \"random\": true,\n            \"anim\": {\n              \"enable\": false,\n              \"speed\": 40,\n              \"size_min\": 0.1,\n              \"sync\": false\n            }\n          },\n          \"line_linked\": {\n            \"enable\": true,\n            \"distance\": 150,\n            \"color\": \"#ffffff\",\n            \"opacity\": 0.4,\n            \"width\": 1\n          },\n          \"move\": {\n            \"enable\": true,\n            \"speed\": 6,\n            \"direction\": \"none\",\n            \"random\": false,\n            \"straight\": false,\n            \"out_mode\": \"out\",\n            \"bounce\": false,\n            \"attract\": {\n              \"enable\": false,\n              \"rotateX\": 600,\n              \"rotateY\": 1200\n            }\n          }\n        },\n        \"interactivity\": {\n          \"detect_on\": \"canvas\",\n          \"events\": {\n            \"onhover\": {\n              \"enable\": true,\n              \"mode\": \"repulse\"\n            },\n            \"onclick\": {\n              \"enable\": true,\n              \"mode\": \"push\"\n            },\n            \"resize\": true\n          },\n          \"modes\": {\n            \"grab\": {\n              \"distance\": 400,\n              \"line_linked\": {\n                \"opacity\": 1\n              }\n            },\n            \"bubble\": {\n              \"distance\": 400,\n              \"size\": 40,\n              \"duration\": 2,\n              \"opacity\": 8,\n              \"speed\": 3\n            },\n            \"repulse\": {\n              \"distance\": 200,\n              \"duration\": 0.4\n            },\n            \"push\": {\n              \"particles_nb\": 4\n            },\n            \"remove\": {\n              \"particles_nb\": 2\n            }\n          }\n        },\n        \"retina_detect\": true\n    }",
            "nasa": "{\n        \"particles\": {\n          \"number\": {\n            \"value\": 250,\n            \"density\": {\n              \"enable\": true,\n              \"value_area\": 800\n            }\n          },\n          \"color\": {\n            \"value\": \"#ffffff\"\n          },\n          \"shape\": {\n            \"type\": \"circle\",\n            \"stroke\": {\n              \"width\": 0,\n              \"color\": \"#000000\"\n            },\n            \"polygon\": {\n              \"nb_sides\": 5\n            },\n            \"image\": {\n              \"src\": \"img\/github.svg\",\n              \"width\": 100,\n              \"height\": 100\n            }\n          },\n          \"opacity\": {\n            \"value\": 1,\n            \"random\": true,\n            \"anim\": {\n              \"enable\": true,\n              \"speed\": 1,\n              \"opacity_min\": 0,\n              \"sync\": false\n            }\n          },\n          \"size\": {\n            \"value\": 3,\n            \"random\": true,\n            \"anim\": {\n              \"enable\": false,\n              \"speed\": 4,\n              \"size_min\": 0.3,\n              \"sync\": false\n            }\n          },\n          \"line_linked\": {\n            \"enable\": false,\n            \"distance\": 150,\n            \"color\": \"#ffffff\",\n            \"opacity\": 0.4,\n            \"width\": 1\n          },\n          \"move\": {\n            \"enable\": true,\n            \"speed\": 1,\n            \"direction\": \"none\",\n            \"random\": true,\n            \"straight\": false,\n            \"out_mode\": \"out\",\n            \"bounce\": false,\n            \"attract\": {\n              \"enable\": false,\n              \"rotateX\": 600,\n              \"rotateY\": 600\n            }\n          }\n        },\n        \"interactivity\": {\n          \"detect_on\": \"canvas\",\n          \"events\": {\n            \"onhover\": {\n              \"enable\": true,\n              \"mode\": \"bubble\"\n            },\n            \"onclick\": {\n              \"enable\": true,\n              \"mode\": \"repulse\"\n            },\n            \"resize\": true\n          },\n          \"modes\": {\n            \"grab\": {\n              \"distance\": 400,\n              \"line_linked\": {\n                \"opacity\": 1\n              }\n            },\n            \"bubble\": {\n              \"distance\": 250,\n              \"size\": 0,\n              \"duration\": 2,\n              \"opacity\": 0,\n              \"speed\": 3\n            },\n            \"repulse\": {\n              \"distance\": 400,\n              \"duration\": 0.4\n            },\n            \"push\": {\n              \"particles_nb\": 4\n            },\n            \"remove\": {\n              \"particles_nb\": 2\n            }\n          }\n        },\n        \"retina_detect\": true\n    }",
            "bubble": "{\n        \"particles\": {\n          \"number\": {\n            \"value\": 15,\n            \"density\": {\n              \"enable\": true,\n              \"value_area\": 800\n            }\n          },\n          \"color\": {\n            \"value\": \"#1b1e34\"\n          },\n          \"shape\": {\n            \"type\": \"polygon\",\n            \"stroke\": {\n              \"width\": 0,\n              \"color\": \"#000\"\n            },\n            \"polygon\": {\n              \"nb_sides\": 6\n            },\n            \"image\": {\n              \"src\": \"img\/github.svg\",\n              \"width\": 100,\n              \"height\": 100\n            }\n          },\n          \"opacity\": {\n            \"value\": 0.3,\n            \"random\": true,\n            \"anim\": {\n              \"enable\": false,\n              \"speed\": 1,\n              \"opacity_min\": 0.1,\n              \"sync\": false\n            }\n          },\n          \"size\": {\n            \"value\": 50,\n            \"random\": false,\n            \"anim\": {\n              \"enable\": true,\n              \"speed\": 10,\n              \"size_min\": 40,\n              \"sync\": false\n            }\n          },\n          \"line_linked\": {\n            \"enable\": false,\n            \"distance\": 200,\n            \"color\": \"#ffffff\",\n            \"opacity\": 1,\n            \"width\": 2\n          },\n          \"move\": {\n            \"enable\": true,\n            \"speed\": 8,\n            \"direction\": \"none\",\n            \"random\": false,\n            \"straight\": false,\n            \"out_mode\": \"out\",\n            \"bounce\": false,\n            \"attract\": {\n              \"enable\": false,\n              \"rotateX\": 600,\n              \"rotateY\": 1200\n            }\n          }\n        },\n        \"interactivity\": {\n          \"detect_on\": \"canvas\",\n          \"events\": {\n            \"onhover\": {\n              \"enable\": false,\n              \"mode\": \"grab\"\n            },\n            \"onclick\": {\n              \"enable\": false,\n              \"mode\": \"push\"\n            },\n            \"resize\": true\n          },\n          \"modes\": {\n            \"grab\": {\n              \"distance\": 400,\n              \"line_linked\": {\n                \"opacity\": 1\n              }\n            },\n            \"bubble\": {\n              \"distance\": 400,\n              \"size\": 40,\n              \"duration\": 2,\n              \"opacity\": 8,\n              \"speed\": 3\n            },\n            \"repulse\": {\n              \"distance\": 200,\n              \"duration\": 0.4\n            },\n            \"push\": {\n              \"particles_nb\": 4\n            },\n            \"remove\": {\n              \"particles_nb\": 2\n            }\n          }\n        },\n        \"retina_detect\": true\n    }",
            "snow": "{\n        \"particles\": {\n          \"number\": {\n            \"value\": 450,\n            \"density\": {\n              \"enable\": true,\n              \"value_area\": 800\n            }\n          },\n          \"color\": {\n            \"value\": \"#fff\"\n          },\n          \"shape\": {\n            \"type\": \"circle\",\n            \"stroke\": {\n              \"width\": 0,\n              \"color\": \"#000000\"\n            },\n            \"polygon\": {\n              \"nb_sides\": 5\n            },\n            \"image\": {\n              \"src\": \"img\/github.svg\",\n              \"width\": 100,\n              \"height\": 100\n            }\n          },\n          \"opacity\": {\n            \"value\": 0.5,\n            \"random\": true,\n            \"anim\": {\n              \"enable\": false,\n              \"speed\": 1,\n              \"opacity_min\": 0.1,\n              \"sync\": false\n            }\n          },\n          \"size\": {\n            \"value\": 5,\n            \"random\": true,\n            \"anim\": {\n              \"enable\": false,\n              \"speed\": 40,\n              \"size_min\": 0.1,\n              \"sync\": false\n            }\n          },\n          \"line_linked\": {\n            \"enable\": false,\n            \"distance\": 500,\n            \"color\": \"#ffffff\",\n            \"opacity\": 0.4,\n            \"width\": 2\n          },\n          \"move\": {\n            \"enable\": true,\n            \"speed\": 6,\n            \"direction\": \"bottom\",\n            \"random\": false,\n            \"straight\": false,\n            \"out_mode\": \"out\",\n            \"bounce\": false,\n            \"attract\": {\n              \"enable\": false,\n              \"rotateX\": 600,\n              \"rotateY\": 1200\n            }\n          }\n        },\n        \"interactivity\": {\n          \"detect_on\": \"canvas\",\n          \"events\": {\n            \"onhover\": {\n              \"enable\": true,\n              \"mode\": \"bubble\"\n            },\n            \"onclick\": {\n              \"enable\": true,\n              \"mode\": \"repulse\"\n            },\n            \"resize\": true\n          },\n          \"modes\": {\n            \"grab\": {\n              \"distance\": 400,\n              \"line_linked\": {\n                \"opacity\": 0.5\n              }\n            },\n            \"bubble\": {\n              \"distance\": 400,\n              \"size\": 4,\n              \"duration\": 0.3,\n              \"opacity\": 1,\n              \"speed\": 3\n            },\n            \"repulse\": {\n              \"distance\": 200,\n              \"duration\": 0.4\n            },\n            \"push\": {\n              \"particles_nb\": 4\n            },\n            \"remove\": {\n              \"particles_nb\": 2\n            }\n          }\n        },\n        \"retina_detect\": true\n    }",
            "nyan_cat": "{\n        \"particles\": {\n          \"number\": {\n            \"value\": 150,\n            \"density\": {\n              \"enable\": false,\n              \"value_area\": 800\n            }\n          },\n          \"color\": {\n            \"value\": \"#ffffff\"\n          },\n          \"shape\": {\n            \"type\": \"star\",\n            \"stroke\": {\n              \"width\": 0,\n              \"color\": \"#000000\"\n            },\n            \"polygon\": {\n              \"nb_sides\": 5\n            },\n            \"image\": {\n              \"src\": \"http:\/\/wiki.lexisnexis.com\/academic\/images\/f\/fb\/Itunes_podcast_icon_300.jpg\",\n              \"width\": 100,\n              \"height\": 100\n            }\n          },\n          \"opacity\": {\n            \"value\": 0.5,\n            \"random\": false,\n            \"anim\": {\n              \"enable\": false,\n              \"speed\": 1,\n              \"opacity_min\": 0.1,\n              \"sync\": false\n            }\n          },\n          \"size\": {\n            \"value\": 4,\n            \"random\": true,\n            \"anim\": {\n              \"enable\": false,\n              \"speed\": 40,\n              \"size_min\": 0.1,\n              \"sync\": false\n            }\n          },\n          \"line_linked\": {\n            \"enable\": false,\n            \"distance\": 150,\n            \"color\": \"#ffffff\",\n            \"opacity\": 0.4,\n            \"width\": 1\n          },\n          \"move\": {\n            \"enable\": true,\n            \"speed\": 14,\n            \"direction\": \"left\",\n            \"random\": false,\n            \"straight\": true,\n            \"out_mode\": \"out\",\n            \"bounce\": false,\n            \"attract\": {\n              \"enable\": false,\n              \"rotateX\": 600,\n              \"rotateY\": 1200\n            }\n          }\n        },\n        \"interactivity\": {\n          \"detect_on\": \"canvas\",\n          \"events\": {\n            \"onhover\": {\n              \"enable\": false,\n              \"mode\": \"grab\"\n            },\n            \"onclick\": {\n              \"enable\": true,\n              \"mode\": \"repulse\"\n            },\n            \"resize\": true\n          },\n          \"modes\": {\n            \"grab\": {\n              \"distance\": 200,\n              \"line_linked\": {\n                \"opacity\": 1\n              }\n            },\n            \"bubble\": {\n              \"distance\": 400,\n              \"size\": 40,\n              \"duration\": 2,\n              \"opacity\": 8,\n              \"speed\": 3\n            },\n            \"repulse\": {\n              \"distance\": 200,\n              \"duration\": 0.4\n            },\n            \"push\": {\n              \"particles_nb\": 4\n            },\n            \"remove\": {\n              \"particles_nb\": 2\n            }\n          }\n        },\n        \"retina_detect\": true\n    }"
            };
            `
        }}  
        />*/}

        
        <script
        dangerouslySetInnerHTML={{
            __html: `
            var aelia_eu_vat_assistant_params = {"tax_based_on":"shipping","eu_vat_countries":["AT","BE","BG","CY","CZ","DE","DK","EE","ES","FI","FR","GB","GR","HU","HR","IE","IT","LT","LU","LV","MT","NL","PL","PT","RO","SE","SI","SK","MC","IM"],"ajax_url":"\/wp-admin\/admin-ajax.php","show_self_cert_field":"no","eu_vat_field_required":"optional","hide_self_cert_field_with_valid_vat":"1","ip_address_country":"RO","use_shipping_as_evidence":"0","user_interface":{"self_certification_field_title":"I am established, have my permanent address, or usually reside within <strong>{billing_country}<\/strong>."},"show_eu_vat_number_for_base_country":"1","shop_base_country":"DE","_ajax_nonce":"44ec82b584"};
            `
        }}  
        />

        <script
        dangerouslySetInnerHTML={{
            __html: `
              var jetMenuPublicSettings = {"menuSettings":{"jetMenuRollUp":"false","jetMenuMouseleaveDelay":"500","jetMenuMegaWidthType":"container","jetMenuMegaWidthSelector":"","jetMenuMegaOpenSubType":"hover","jetMenuMobileBreakpoint":"768"}};
            `
        }}  
        />

        <script
        dangerouslySetInnerHTML={{
            __html: `
            var ElementorProFrontendConfig = {"ajaxurl":"https:\/\/worldbrain.io\/wp-admin\/admin-ajax.php","nonce":"3e69804962","shareButtonsNetworks":{"facebook":{"title":"Facebook","has_counter":true},"twitter":{"title":"Twitter"},"google":{"title":"Google+","has_counter":true},"linkedin":{"title":"LinkedIn","has_counter":true},"pinterest":{"title":"Pinterest","has_counter":true},"reddit":{"title":"Reddit","has_counter":true},"vk":{"title":"VK","has_counter":true},"odnoklassniki":{"title":"OK","has_counter":true},"tumblr":{"title":"Tumblr"},"delicious":{"title":"Delicious"},"digg":{"title":"Digg"},"skype":{"title":"Skype"},"stumbleupon":{"title":"StumbleUpon","has_counter":true},"telegram":{"title":"Telegram"},"pocket":{"title":"Pocket","has_counter":true},"xing":{"title":"XING","has_counter":true},"whatsapp":{"title":"WhatsApp"},"email":{"title":"Email"},"print":{"title":"Print"}},"facebook_sdk":{"lang":"en_US","app_id":""}};
            `
        }}  
        />

        <script
        dangerouslySetInnerHTML={{
            __html: `
            var jetElements = {"messages":{"invalidMail":"Please specify a valid e-mail"},"jetParallaxSections":{"aeac1c5":[{"jet_parallax_layout_image":{"url":"","id":""},"_id":"8b6cfdc","jet_parallax_layout_speed":{"unit":"%","size":50,"sizes":[]},"jet_parallax_layout_type":"scroll","jet_parallax_layout_z_index":"","jet_parallax_layout_bg_x":50,"jet_parallax_layout_bg_y":50,"jet_parallax_layout_bg_size":"auto","jet_parallax_layout_animation_prop":"transform","jet_parallax_layout_on":["desktop","tablet"]}],"186250c":[{"jet_parallax_layout_image":{"url":"","id":""},"_id":"6785136","jet_parallax_layout_speed":{"unit":"%","size":50,"sizes":[]},"jet_parallax_layout_type":"scroll","jet_parallax_layout_z_index":"","jet_parallax_layout_bg_x":50,"jet_parallax_layout_bg_y":50,"jet_parallax_layout_bg_size":"auto","jet_parallax_layout_animation_prop":"transform","jet_parallax_layout_on":["desktop","tablet"]}],"1890711":[{"jet_parallax_layout_image":{"url":"","id":""},"_id":"7f46ed7","jet_parallax_layout_speed":{"unit":"%","size":50,"sizes":[]},"jet_parallax_layout_type":"scroll","jet_parallax_layout_z_index":"","jet_parallax_layout_bg_x":50,"jet_parallax_layout_bg_y":50,"jet_parallax_layout_bg_size":"auto","jet_parallax_layout_animation_prop":"transform","jet_parallax_layout_on":["desktop","tablet"]}],"1fb6abab":[{"jet_parallax_layout_image":{"url":"","id":""},"jet_parallax_layout_speed":{"unit":"%","size":50,"sizes":[]},"jet_parallax_layout_type":"scroll","jet_parallax_layout_z_index":"","jet_parallax_layout_bg_x":50,"jet_parallax_layout_bg_y":50,"jet_parallax_layout_bg_size":"auto","jet_parallax_layout_animation_prop":"transform","jet_parallax_layout_on":["desktop","tablet"],"_id":"8cb4fb8"}],"0f43dd9":[{"jet_parallax_layout_image":{"url":"","id":""},"_id":"7ccba69","jet_parallax_layout_speed":{"unit":"%","size":50,"sizes":[]},"jet_parallax_layout_type":"scroll","jet_parallax_layout_z_index":"","jet_parallax_layout_bg_x":50,"jet_parallax_layout_bg_y":50,"jet_parallax_layout_bg_size":"auto","jet_parallax_layout_animation_prop":"transform","jet_parallax_layout_on":["desktop","tablet"]}]}};
            `
        }}  
        />

        <script
        dangerouslySetInnerHTML={{
            __html: `
            var jetWooBuilderData = [];
            `
        }}  
        />

        <script
        dangerouslySetInnerHTML={{
            __html: `
            var _wpUtilSettings = {"ajax":{"url":"\/wp-admin\/admin-ajax.php"}};
            `
        }}  
        />
  
        <div className='xlwcty_header_passed' style={{display: 'none'}}></div>

      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
