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
      yith-ctpw elementor-default elementor-page elementor-page-8547 th-sticky-header">
        
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
  
        <div class='xlwcty_header_passed' style={{display: 'none'}}></div>

        <script src={withPrefix('/js/cached.js')} type="text/javascript" />

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
