var defaultBranding = 'girlgames.com';
var gameName = 'princesses_royal_vs_star';
var domainName = document.referrer;
var ajU_u7X=true;
if (domainName == "") {
	domainName = window.location.href;
}
var domain_parts = domainName.split("://");
var domain_subparts = domain_parts[1].split("/");
var hostNames = domain_subparts[0];
var branding = getBranding();
var mainUrl = branding.siteUrl;
var site = 'egg';
var logoUrl = mainUrl + "?utm_campaign=" + gameName + "&utm_source=" + hostNames + "&utm_medium=game_referral&utm_content=logo";
var THUMB_1 = thumbs[site][0] + "?utm_campaign=" + gameName + "&utm_source=" + hostNames + "&utm_medium=game_referral&utm_content=thumb1";
var THUMB_2 = thumbs[site][1] + "?utm_campaign=" + gameName + "&utm_source=" + hostNames + "&utm_medium=game_referral&utm_content=thumb2";
var THUMB_3 = thumbs[site][2] + "?utm_campaign=" + gameName + "&utm_source=" + hostNames + "&utm_medium=game_referral&utm_content=thumb3";
var THUMB_4 = thumbs[site][3] + "?utm_campaign=" + gameName + "&utm_source=" + hostNames + "&utm_medium=game_referral&utm_content=thumb4";
var mGamesLink = mainUrl + "?utm_campaign=" + gameName + "&utm_source=" + hostNames + "&utm_medium=game_referral&utm_content=more_games";
var loaderlogolink = mainUrl + "?utm_campaign=" + gameName + "&utm_source=" + hostNames + "&utm_medium=game_referral&utm_content=preloader_logo";