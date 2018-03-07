var port = 5000
var address = 'http://localhost'
var url = address + ':' + port
var notification_period_ms = 10000
var audio_mime = 'audio/flac';
var text_mime = 'text/plain';
var debug = false;

/*
var json = {"additional_data":{"formal_request":{"keywords":["trump"],"subtype":"news","type":"data_request"},"unformatted_data":[{"datetime":"2018-03-06T18:27:55","link":"https://www.npr.org/2018/03/05/591001865/ex-trump-campaign-aide-vows-to-fight-mueller-subpoena-in-tv-tirades","summary":"After initially saying he would not comply with a subpoena from Justice Department special counsel Robert Mueller, former Trump campaign aide Sam Nunberg appears to have changed his mind and is likely to cooperate.\nAfter initially saying he would not comply with a subpoena from Justice Department special counsel Robert Mueller, former Trump campaign aide Sam Nunberg appears to have changed his mind and is likely to cooperate.\nA former campaign aide to Donald Trump appears to have changed his mind and will not fight a subpoena he says he has received in the Russia investigation \u2014 after daring special counsel Robert Mueller to arrest him in multiple media appearances.\nSam Nunberg called reporters and TV news programs on Monday and said live that he’d gotten a grand jury subpoena as part of Mueller’s investigation asking for communications with other people in the Trump orbit \u2014 but that he would not comply.\nWhat followed was a rambling, at-times incoherent series of exchanges as Nunberg asked for legal advice, opined about whether Trump colluded with Russia, and relitigated an internal Trump campaign power struggle from 2015 \u2014 all live, on the air, in real time.\nNunberg also accused former Trump foreign policy adviser Carter Page of having played a role in the foreign attack on the election.\nAt the time, Nunberg’s firing was viewed as part of a broader struggle between Trump aides Corey Lewandowski and Roger Stone.\n (Summary created with sumy 0.7.0 library)","title":"Ex-Trump Aide Sam Nunberg Says He Is Likely To Cooperate With Mueller Subpoena"},{"datetime":"2018-03-06T17:02:05","link":"https://www.washingtonpost.com/news/the-fix/wp/2018/03/06/trumps-madman-approach-to-north-korea-is-getting-real-credit/","summary":"A man watches a TV screen in Seoul showing President Trump and North Korean leader Kim Jong Un.\nNorth Korea is now open to talks with the United States about scaling back its nuclear program, according to South Korean officials who met with their northern neighbors.\nNorth Korea did not confirm South Korea\u2019s version of events, saying simply that the two sides \u201cmade a satisfactory agreement\u201d during the meeting between the North\u2019s leader, Kim Jong Un, and envoys sent by the South\u2019s president, Moon Jae-in .\nBut some foreign policy experts say Trump has helped move the needle \u2014 however temporarily or tentatively \u2014 because of his \u201cmadman\u201d approach to North Korea and/or the sanctions spurred by the Trump administration’s efforts.\n\u201cI think North Korea\u2019s openness in the Olympics and summitry with South Korea, as well as potentially direct talks with the U.S., are the result of Trump’s approach.\u201d\nBefore the Olympics, Moon credited Trump with helping open the door to North Korean participation \u2014 and eventually a joint North Korea-South Korea women’s hockey team.\n\u201cCertainly, Trump should have introduced uncertainty and challenged North Korean assumptions about what they can expect and whether the U.S. will simply accept vulnerability to a North Korean nuclear threat,\u201d Snyder said.\n (Summary created with sumy 0.7.0 library)","title":"Trump’s ‘madman’ approach to North Korea is getting real credit"},{"datetime":"2018-03-06T15:47:09","link":"https://www.washingtonpost.com/news/politics/wp/2018/03/06/trump-made-a-lot-more-money-under-obama-than-under-trump/","summary":"In the year before he announced his presidential candidacy, Donald Trump added $1.3 billion to his net worth.\nThat\u2019s to hear Trump tell it, anyway; he claimed to have been worth $8.7 billion in June 2014 and, by the time he released his personal financial disclosure the following year, it was up to a neat $10 billion .\nOn Tuesday, Forbes released an updated estimate of President Trump\u2019s wealth: He\u2019s now worth $3.1 billion, Forbes figures , up from 2011, but down substantially from 2015.\nIt\u2019s close to the most recent estimate from Bloomberg News, which had Trump worth $2.9 billion in June.\nOnce Trump declared his presidential candidacy, his net worth began to fall.\nRevenues are also down in Scotland, where the president owns two golf clubs.\u201d\nForbes also estimated Trump\u2019s brand businesses \u2014 which Trump put at $3.3 billion in 2014 \u2014 at a measly $180 million.\n (Summary created with sumy 0.7.0 library)","title":"Trump made a lot more money under Obama than under Trump"},{"datetime":"2018-03-06T14:30:04","link":"https://www.vox.com/energy-and-environment/2018/3/6/17077330/trump-regulatory-agenda-omb","summary":"The OMB report reveals the core reason: Of all the regulations passed from 2006 to 2016, it is environmental regulations, specifically air pollution regulations, that had both the highest costs and the highest benefits.\nThe MATS rule, aimed at reducing toxic emissions from power plants, had between $33 billion and $90 billion in benefits (in 2007 dollars, for some reason), but it cost industry $9.6 billion.\nIn short, air quality rules secure enormous health benefits for the American public, but they also ask a great deal of industry.\nUpward redistribution is what unites GOP health care policy, tax policy, financial sector policy, and environmental policy.\nOkay, environmental regulations produce enormous health and social benefits, but don\u2019t they kill jobs?\nIf it doesn\u2019t think the costs to industry of reducing pollution are worth much larger benefits to public health, it can say so.\nThe OMB finds no evidence that federal regulations have any noticeable impact on aggregate national employment or economic growth.\n (Summary created with sumy 0.7.0 library)","title":"Trump White House quietly issues report vindicating Obama regulations"},{"datetime":"2018-03-06T14:29:00","link":"https://www.cnbc.com/2018/03/06/trump-there-are-people-in-the-white-house-that-i-want-to-change.html","summary":"President Trump pushes back against reports of \"chaos\" in the White House.\nTrump’s new tweet saying there are people in his administration he wants to change follows recent criticism of Attorney General Jeff Sessions and fears among Trump supporters that economic aide Gary Cohn may resign over tariffs.\nLast week, Trump’s longtime aide and confidant, White House communications director Hope Hicks, announced her resignation.\n (Summary created with sumy 0.7.0 library)","title":"Trump tweets: There are people in the White House ‘that I want to change’"},{"datetime":"2018-03-06T14:16:30","link":"https://www.washingtonpost.com/news/morning-mix/wp/2018/03/06/donald-j-trump-utah-national-parks-highway-meets-stormy-daniels-rampway/","summary":"Arch Canyon within Bears Ears National Monument in Utah.\nSome Republican lawmakers in Utah are so pleased with President Trump\u2019s decision to shrink two Utah national monuments that they want to honor him with his own road, the \u201cDonald J. Trump Utah National Parks Highway.\u201d\nThe proposal would put the Trump brand on the existing Utah National Parks Highway, 631 miles of scenic roads through southern Utah\u2019s stunningly beautiful canyons, a stretch that includes Zion National Park, Grand Staircase-Escalante National Monument, Glen Canyon National Recreation Area and Canyonlands National Park.\nRepublicans praised Trump for shrinking the Bears Ears and Grand Staircase-Escalante national monuments in December, opening them up for oil, gas and coal mining potential.\n\u201cI think it\u2019s a small price to pay to name a highway after him when he does in fact protect public lands.\u201d\nState Sen. Jim Dabakis (D) responded with his own renaming proposal: If the House passes the bill, then Dabakis threatened to attach an amendment in the Senate that would rename the frontage road that runs along the would-be Donald J. Trump Utah National Parks Highway.\nTrump stripped roughly 1.1 million acres from Bears Ears, reducing its protected area by 85 percent.\n (Summary created with sumy 0.7.0 library)","title":"‘Donald J. Trump Utah National Parks Highway’ meets ‘Stormy Daniels rampway’"},{"datetime":"2018-03-06T13:43:00","link":"https://www.cnn.com/2018/03/06/politics/trump-chaos-white-house-tweet/index.html","summary":"\"The new Fake News narrative is that there is CHAOS in the White House.\nPeople will always come & go, and I want strong dialogue before making a final decision,\" Trump tweeted.\nOver the weekend, White House chief economic adviser Gary Cohn was furious , one person familiar told CNN, and reportedly wanted to resign over Trump’s decision to impose steel and aluminum tariffs.\nAnd on Monday, former Trump ally Sam Nunberg told multiple reporters and television networks that he wouldn’t comply with the special counsel’s subpoena of his emails with former Trump aides.\nSome additional headlines from last week that fueled the latest reports of \"chaos\" include:\n\u2022 Trump confidante Hope Hicks’ resignation a day after admitting to a congressional panel that she told white lies for her boss.\n\u2022 Trump’s chief of staff John Kelly suggesting God had punished him by landing him in his job, while Anthony Scaramucci, the President’s short-lived communications director, saying White House morale was as bad as it’s ever been.\n (Summary created with sumy 0.7.0 library)","title":"Trump says there isn’t chaos in the White House, ‘only great energy’"},{"datetime":"2018-03-06T13:25:22","link":"https://www.washingtonpost.com/news/wonk/wp/2018/03/06/winners-and-losers-from-trumps-tariffs/","summary":"Every foreign company that sends steel and aluminum to the United States, including Canadian firms, would be forced to pay a 25 percent tariff on steel and a 10 percent tariff on aluminum.\nIf it backfires, Americans could face higher prices on everything from cars to microwaves, and the U.S. economy could sputter, hurting Republicans’ chances in the midterms and Trump’s in 2020.\nAs prices of aluminum and steel jump in the United States, it makes the prices of parts rise as well and that makes foreign parts look more appealing than American ones.\nA similar scenario played out after President George W. Bush’s 2002 tariffs on steel: 200,000 jobs were lost, according to research from the same consulting firm, which is more than the total number of people employed in the primary steel industry at the time.\nHistory also shows that past tariffs under George W. Bush and Obama resulted in net job losses.\nOnly 3 percent of U.S. steel imports originate in China, according to research firm Evercore ISI.\nUnited Steelworkers President Leo Gerard is Canadian and has been lobbying the White House extensively to exclude Canada and other countries that \u201cplay by the rules.\u201d The USW has a large Canadian membership.\n (Summary created with sumy 0.7.0 library)","title":"Winners and losers from Trump’s tariffs"},{"datetime":"2018-03-06T13:01:11","link":"https://www.cnbc.com/2018/03/06/trump-tariff-or-not-ron-paul-warns-a-calamity-will-hit-stocks.html","summary":"The situation facing stocks may appear more ominous with the addition of President Donald Trump’s tariff threat.\n\"If the Fed continues on the things that they are sort of planning on doing, it’s going to be a calamity,\" he said Monday on CNBC’s \" Trading Nation .\"\nHe says investors should not be shocked by a stock market plunge as deep as 50 percent.\n\"It’s going to be a calamity\" On \"Trading Nation\" last spring, he said a correction was \"inevitable\" despite a string of recent Nasdaq highs.\nThe broader market correction hit about 10 months later on Feb. 2.\nFor now, the markets seem to breathing a sigh of relief.The Dow rallied 336 points to close at 24,875 on Monday on the notion that Trump may back down from the steel and aluminum tariff threat.\nAccording to Paul’s latest prediction, the February pullback may be just a blip compared to what’s ahead.\n (Summary created with sumy 0.7.0 library)","title":"Ron Paul warns that market dangers are ‘bigger than ever,’ even if Trump backs away from tariff threat"},{"datetime":"2018-03-06T11:00:33","link":"https://www.theatlantic.com/politics/archive/2018/03/republicans-cant-stop-trumps-trade-war-tariffs/554903/","summary":"It\u2019s a major recurring theme of the Trump administration: The president threatens to betray a conservative principle, and Republicans in Congress try to talk him out of it.\nWhen Trump has veered left on immigration and told either Democratic leaders or bipartisan groups of lawmakers that he\u2019d back a simple deal to give the so-called Dreamers a path to citizenship, conservatives on Capitol Hill\u2014along with hardliners like Stephen Miller in the White House\u2014have persuaded him to back off and insist on a tougher stance instead.\nAfter the president flirted last week with strict gun-control policies, National Rifle Association lobbyists swooped in to set him straight , and GOP leaders backed them up by putting off quick votes on tighter gun restrictions.\nIn 1881, after California lawmakers imposed a special tax on railroad property, Southern Pacific pushed back, making the bold argument that the law was an act of unconstitutional discrimination under the Fourteenth Amendment.\nIt\u2019s a major recurring theme of the Trump administration: The president threatens to betray a conservative principle, and Republicans in Congress try to talk him out of it.\nWhen Trump has veered left on immigration and told either Democratic leaders or bipartisan groups of lawmakers that he\u2019d back a simple deal to give the so-called Dreamers a path to citizenship, conservatives on Capitol Hill\u2014along with hardliners like Stephen Miller in the White House\u2014have persuaded him to back off and insist on a tougher stance instead.\nAfter the president flirted last week with strict gun-control policies, National Rifle Association lobbyists swooped in to set him straight , and GOP leaders backed them up by putting off quick votes on tighter gun restrictions.\n (Summary created with sumy 0.7.0 library)","title":"Republicans Can’t Stop Trump’s Trade War"},{"datetime":"2018-03-06T10:43:04","link":"http://abcnews.go.com/US/flynn-selling-house-pay-legal-bills-trump-probe/story?id=53545172","summary":"\n (Summary created with sumy 0.7.0 library)","title":"Flynn selling house to pay legal bills in Trump probe"},{"datetime":"2018-03-06T10:13:39","link":"https://www.cnbc.com/2018/03/06/trade-war-european-carmakers-urge-trump-to-rethink-retaliatory-tariffs.html","summary":"European automakers have urged President Donald Trump to abandon his plans to impose a retaliatory tax on car imports from the European Union ( EU ).\nAn escalating war of words between the EU and the U.S. first began when Trump announced plans to slap hefty tariffs on steel and aluminum imports.\n’Already massive tariffs’ Shortly after the U.S. president’s full-throated backing of tariffs, EU trade chiefs were thought to be considering whether or not to impose a 25 percent tax on around $3.5 billion of U.S. imports, Reuters reported.\nEuropean Commission President Jean-Claude Juncker had previously vowed to react firmly to Trump’s tariff threats.\nI hope the politicians really think about it and create win-win situations for their societies,\" Ralf Speth, CEO at Jaguar Land Rover, told CNBC on Tuesday.\nTrade war would be ‘very bad’ \"If you really think this through, I think everybody will realize that free trade and openness is beneficial for everybody,\" Hakan Samuelsson, CEO at Volvo Cars , told CNBC on Tuesday.\nMatthias Mueller added there was no need to react to the threat of additional taxes on European car sales to U.S. customers at this moment.\n (Summary created with sumy 0.7.0 library)","title":"European carmakers urge Trump to rethink retaliatory tariff on car exports amid trade war fears"},{"datetime":"2018-03-06T10:06:15","link":"https://www.politico.com/magazine/story/2018/03/06/donald-trump-survival-blair-217234","summary":"So wild, in fact, that there\u2019s a growing sense that Donald Trump may be engulfed in an administration-threatening crisis of his own making.\nDonald\u2019s restaurateur grandfather, Friedrich, provided Yukon gold miners with their heart\u2019s desire, namely food, liquor and female companionship, and put together what would be the initial Trump family nest egg.\nIn what would be his first headlines, Trump came across as an unstoppable go-getter, and by signing a settlement that allowed him to avoid admitting any culpability and imposed only toothless penalties, he was even able to claim victory.\nHe took his casinos public and made his shareholders bear the risk for his ill-advised expansion.\nThe evidence, I would argue from long observation, suggests otherwise.\nEven if special counsel Robert Mueller were to indict Trump before the midterm elections, he wouldn\u2019t be held truly accountable unless a Republican-controlled House voted for impeachment, and a Republican-controlled Senate found him guilty.\nThat\u2019s when what has arguably been a Trump problem would turn into a wholly Republican problem.\n (Summary created with sumy 0.7.0 library)","title":"Trump’s Singular Survival Skill"},{"datetime":"2018-03-06T10:05:44","link":"https://www.politico.com/magazine/story/2018/03/06/jay-inslee-washington-governor-off-message-217233","summary":"Democrats are tracking Republican gubernatorial primaries, where, in most states, candidates\u2014even in Nevada, Michigan, Florida and Tennessee, where Trump\u2019s backing of one candidate is already public\u2014are still elbowing each other to out-Trump each other.\nJust as the Republican wins in 2014 governors races previewed Trump\u2019s strength in key states and helped put in place policies that helped him along\u2014passing right-to-work laws in Michigan and Wisconsin, for example, which undercut union strength on Election Day\u2014Republicans are warning the White House to focus on governors races this year if only for the sake of protecting Trump\u2019s reelection chances in 2020.\nThey\u2019re also dismissive of any Democratic effort to nationalize gubernatorial races, pointing out that their own attempt to do that in Montana and West Virginia, two of the heaviest pro-Trump states, didn\u2019t stop the states from electing Democratic governors on the same day in 2016.\nBill Schuette, Michigan\u2019s Republican attorney general and the front-runner in that state\u2019s gubernatorial primary, dismissed Inslee\u2019s strategy on Trump.\nMaybe try the Trump argument in bluer states\u2014though in two of the bluest, Maryland and Massachusetts, Republican incumbents running for reelection have the highest approval numbers in the country\u2014but not in any state where the president is popular.\nInslee boasts not just about what happens when a state elects a Democratic governor, but what happens when a state puts the whole government in Democratic hands\u2014as happened after a special election in the Washington state Senate last year flipped from red to blue\u2014and upends control of the whole chamber.\n\u201cThere\u2019s points where things change, and I think we\u2019re getting to that tipping point right now on climate change,\u201d Inslee said.\n (Summary created with sumy 0.7.0 library)","title":"Democrats Vow to Go After Republican Governors ‘Kowtowing’ to Trump"},{"datetime":"2018-03-06T05:40:03","link":"http://www.bbc.com/news/world-latin-america-43297902","summary":"Image copyrightAFPImage caption\nThe Trump name was removed from the hotel hours after the court ruling\nThe majority owner of a luxury hotel in Panama City has regained control of the building after a legal battle with its management - the Trump Organization.\nWithin hours of the verdict from a Panamanian court, hotel staff removed the Trump name from its main entrance.\nMr Fintiklis, majority owner of the Trump Ocean Club International Hotel and Tower, hailed the court’s decision, saying: \"Panama has made us proud.\nOn Monday, police and a court official enforced the owner’s claim to the hotel as Trump Organization executives and security staff abandoned the building.\nImage copyrightAFPImage caption\nThe new-look hotel sign was a hit with some tourists\nTourists later gathered at the spot to have their pictures taken.\nThe legal battle began last month when Mr Fintiklis said he intended to force the Trump Organization out before its management contract was up, and to rebrand the hotel.\nFor its part, the Trump Organization said Mr Fintiklis was breaching his contractual commitments.\n (Summary created with sumy 0.7.0 library)","title":"Panama hotel removes Trump branding after court battle"},{"datetime":"2018-03-06T02:11:44","link":"https://www.nytimes.com/2018/03/05/us/politics/trump-tariffs-steel-aluminum-nafta.html","summary":"Foreign Minister Chrystia Freeland of Canada, left, Economy Secretary Ildefonso Guajardo of Mexico, center, and Robert Lighthizer, the United States trade representative, in Mexico City on Monday.\nNeither Canada nor Mexico appeared mollified by the prospect of a tariff exemption in exchange for bending to United States demands on Nafta.Credit\nJorge Nunez/European Pressphoto Agency\nBut that legal standing will undoubtedly be challenged by other countries and companies, both in court and at the World Trade Organization, which requires that members treat all other members equally on trade.\nCreating exceptions for countries like Canada and Mexico for non-national security reasons like Nafta could invite challenges at the World Trade Organization, said Jennifer Hillman, a professor at Georgetown University Law Center.\nOn Monday, Robert Lighthizer, the United States trade representative, said Mr. Trump decided to link a tariff exemption to a revised Nafta deal \u201ca couple of days ago\u201d as Mr. Lighthizer prepared to travel to Mexico City to meet with his Mexican and Canadian counterparts.\n\u201cIt makes sense, since this is a major irritant, to have it be considered,\u201d Mr. Lighthizer said in Mexico City after meeting with Economy Minister Ildefonso Guajardo of Mexico and Foreign Minister Chrystia Freeland of Canada.\nEven if Canada and Mexico were exempted from the tariffs of 25 percent on steel and 10 percent on aluminum, officials said the United States would impose a quota on those countries\u2019 exports to prevent them from being used as a conduit for metals shipments from other nations.\nNeither Canada nor Mexico appeared mollified by the prospect of a tariff exemption in exchange for bending to United States demands on Nafta.\n (Summary created with sumy 0.7.0 library)","title":"Trump Reaffirms Commitment to Tariffs but Opens Door to Compromise"},{"datetime":"2018-03-06T01:46:55","link":"https://www.nytimes.com/2018/03/05/us/politics/trump-netanyahu-jerusalem-embassy.html","summary":"The two celebrated Mr. Trump\u2019s decision in December to recognize Jerusalem as Israel\u2019s capital and move the American Embassy there from Tel Aviv in defiance of much of the rest of the world.\nJust as Israelis remember those historical figures, Mr. Netanyahu said, \u201cwe remember how a few weeks ago President Donald J. Trump recognized Jerusalem as Israel\u2019s capital.\u201d\nBut Mr. Kushner went to the United Nations recently to hear Mahmoud Abbas, the Palestinian leader, speak in an effort to show respect shortly after the president publicly pressed Israel on settlement construction in the West Bank.\n\u201cThey have an awful lot in common and they both may be desperately in need of a friend and someone who understands what they\u2019re going through,\u201d said Mara Rudman, a former deputy special envoy for Middle East peace under Mr. Obama.\nHis administration announced that it would formally open the Jerusalem embassy in May to coincide with the 70th anniversary of Israel\u2019s independence by redesignating an existing consular facility.\nMany former negotiators have envisioned a peace deal in which both sides operate their capitals out of Jerusalem, the Israelis in the west and the Palestinians in the east.\nMr. Trump\u2019s reference to $250,000 presumably is the cost of making minor adjustments to the existing consular facility so that it can house an office for the American ambassador and be formally redesignated an embassy while a new facility is constructed.\n (Summary created with sumy 0.7.0 library)","title":"Trump’s Hopes of Being the ‘Neutral Guy’ in the Mideast Seem Long Gone"},{"datetime":"2018-03-06T01:43:00","link":"https://www.cnn.com/2018/03/05/politics/donald-trump-netanyahu-problems/index.html","summary":"Mueller’s special investigation began with Russian election meddling and has proceeded along those lines; the police investigations against Netanyahu and his inner circle began as graft probes.\nMembers of each leader’s inner circle have also become a part of the investigations -- Trump’s confidants have been questioned by Mueller; Netanyahu’s confidants have been named as suspects in the probes and have even turned state’s witness.\nOL: Netanyahu’s family isn’t involved in politics the way Trump’s family is involved.\nIf one of Netanyahu’s coalition partners pulls support for the Prime Minister, they may face a backlash from right-wing voters, upset that they toppled a right-wing government.\nBut there was a pall over their meeting Monday, since both men are beset by staffing issues, criminal issues, familial scandal and a skeptical press.\nTo help us break down the similarities -- and differences -- between Trump’s problems and Netanyahu’s problems, we have CNN’s Jerusalem correspondent Oren Liebermann , who has written extensively about the Israeli Prime Minister.\nZW: Oren, you published a story today with the headline \" Third Netanyahu confidant turns states’ witness in graft probes .\"\n (Summary created with sumy 0.7.0 library)","title":"Donald Trump and Benjamin Netanyahu both have big, big problems"},{"datetime":"2018-03-05T20:13:02","link":"https://www.cnn.com/2018/03/05/opinions/trump-gaslighter-xi-jinping-no-term-limits-ghitis-opinion/index.html","summary":"Russian President Vladimir Putin, Trump said, \"called me a genius.\"\nThe combination of admiration for Putin, belief that Putin has great respect for him, and whatever else there may be in that relationship, has contributed to Trump -- the supposedly macho President -- acting like a pussycat when it comes to Russia.\nAnd in a shocking new revelation, a New Yorker article says the Kremlin reportedly instructed Trump not to choose Mitt Romney as secretary of state and choose someone more sympathetic to Russia.\nHe is \"getting very high marks,\" Trump said , even as human rights and democracy monitoring organizations raised the alarm about his attack on free speech and democracy, and Erdogan becomes effectively a dictator .\nDespite all his tough talk against China during the campaign, once in office Trump called Xi \"a very good man,\" no matter Xi’s harsh crackdown .\nAnd after Xi rolled out the thickest red carpet possible to flatter him during his visit to China, Trump sounded genuinely stirred by the lavish reception.\nCNN obtained a tape of Trump talking in the closed meeting about China’s President Xi Jinping, the increasingly authoritarian leader who just had term limits abolished so that he can stay in power for the rest of his life.\n (Summary created with sumy 0.7.0 library)","title":"With Trump, don’t confuse the unthinkable with the impossible"},{"datetime":"2018-03-05T18:04:27","link":"https://www.cnn.com/2018/03/05/politics/donald-trump-xi-jinping-analysis/index.html","summary":"It’s no secret by this point in the Trump presidency tha t he is someone who tends to heap praise on authoritarian dictators .\nFrom urging attendees at his campaign rallies to \"knock the hell\" out of protesters to focusing on the need for America to be more feared than loved around the world, Trump has demonstrated that his governing theory is largely centered on taking as much as you can until someone stops you.\nOn a micro level, Trump’s willingness to give president for life \"a shot some day\" should be very concerning to anyone who is a fan of democracy.\nOn a macro level, Trump’s praise for Xi and interest in his move on term limits is in keeping with a broader lack of concern he has demonstrated in the idea of president as moral leader.\nTrump’s redefining of the presidency takes all sorts of shapes and forms.\nSpeaking about China’s President Xi Jinping, who led the charge to repeal the country’s term limits law last month , Trump said this:\nBut, it is not obvious -- at least to me -- that Trump was joking about Xi’s power grab.\n (Summary created with sumy 0.7.0 library)","title":"This may be the scariest thing Donald Trump has said as president"}]},"data":{"body":{"conclusion":"Find summaries and more news at localhost:7004/news.html","headline":"I found 20 recent articles for [‘trump’].\n","text_body":"Ex-Trump Aide Sam Nunberg Says He Is Likely To Cooperate With Mueller Subpoena: https://www.npr.org/2018/03/05/591001865/ex-trump-campaign-aide-vows-to-fight-mueller-subpoena-in-tv-tirades\nTrump’s ‘madman’ approach to North Korea is getting real credit: https://www.washingtonpost.com/news/the-fix/wp/2018/03/06/trumps-madman-approach-to-north-korea-is-getting-real-credit/\nTrump made a lot more money under Obama than under Trump: https://www.washingtonpost.com/news/politics/wp/2018/03/06/trump-made-a-lot-more-money-under-obama-than-under-trump/\nTrump White House quietly issues report vindicating Obama regulations: https://www.vox.com/energy-and-environment/2018/3/6/17077330/trump-regulatory-agenda-omb\nTrump tweets: There are people in the White House ‘that I want to change’: https://www.cnbc.com/2018/03/06/trump-there-are-people-in-the-white-house-that-i-want-to-change.html\n’Donald J. Trump Utah National Parks Highway’ meets ‘Stormy Daniels rampway’: https://www.washingtonpost.com/news/morning-mix/wp/2018/03/06/donald-j-trump-utah-national-parks-highway-meets-stormy-daniels-rampway/\nTrump says there isn’t chaos in the White House, ‘only great energy’: https://www.cnn.com/2018/03/06/politics/trump-chaos-white-house-tweet/index.html\nWinners and losers from Trump’s tariffs: https://www.washingtonpost.com/news/wonk/wp/2018/03/06/winners-and-losers-from-trumps-tariffs/\nRon Paul warns that market dangers are ‘bigger than ever,’ even if Trump backs away from tariff threat: https://www.cnbc.com/2018/03/06/trump-tariff-or-not-ron-paul-warns-a-calamity-will-hit-stocks.html\nRepublicans Can’t Stop Trump’s Trade War: https://www.theatlantic.com/politics/archive/2018/03/republicans-cant-stop-trumps-trade-war-tariffs/554903/\nFind summaries and more news at localhost:7004/news.html"},"mime_type":"text/plain"},"type":"response"};
*/
$( document ).ready(function() {
  $('#send_button').click(onSendButtonPressed);
  function onSendButtonPressed(){
      message = $('#message_area').val().trim();
      if(message != null && message != ''){
        $('#message_area').val('');
        if(audio_setup){
          $('#send_button').hide();
          $('#audio_button').show();
        }
        $("#message_area").prop('rows',1);
        on_my_message(message.replace("\n", "<br>"));
        send_to_server({mime_type: text_mime, content: message});
      }
  }


  $("#message_area").keydown(function(e){
    // Enter was pressed without shift key
    if (e.keyCode == 13){
      if(!e.shiftKey){
        e.preventDefault();
        onSendButtonPressed();
      }else{
        if($("#message_area").prop('rows')<5){
          $("#message_area").prop('rows',$("#message_area").prop('rows')+1);
        }
      }
    }
  });
  $("#message_area").keyup(function(){
    if(audio_setup){
      var val = message = $(this).val().trim();
      if(val != null && val != ""){
        $('#send_button').show();
        $('#audio_button').hide();
      }else{
        $('#send_button').hide();
        $('#audio_button').show();
      }
    }
  });

  function on_message(message) {
      var html = "<div class='message_wrapper'><div class='output message'>";
      html += message + "</div></div>";
      $('#responses').append(html);
      $('#responses').scrollTop($('#responses')[0].scrollHeight);


  }
  function on_my_message(message) {
      var html = "<div class='message_wrapper'><div class='input message'>";
      html += message + "</div></div>";
      $('#responses').append(html);
      $('#responses').scrollTop($('#responses')[0].scrollHeight);

  }


  /*
  message_style = '\'background: GreenYellow;\'';
  function on_message(message) {
      message_div = $('<div style='+message_style+' class=\"row message\"></div>').text(message);
      $('#responses').prepend(message_div);
  }

  my_message_style = '\'background: #cce6ff;\'';
  function on_my_message(message) {
      message_div = $('<div style='+my_message_style+' class=\"row message\"></div>').text(message);
      $('#responses').prepend(message_div);
  }
  */


  //exception_style = '\'background: red;\'';
  function on_exception(message) {
    /*
      message_div = $('<div style='+exception_style+' class=\"row message\"></div>').text(message);
      $('#errors').prepend(message_div);
      */
      if(debug){
        message = "**ERROR**<br>"+(message);
        var html = "<div class='message_wrapper'><div class='output message'>";
        html += message + "</div></div>";
        $('#responses').append(html);
        $('#responses').scrollTop($('#responses')[0].scrollHeight);
      }
  }

  //unknown_style = '\'background: yellow;\'';
  function on_unknown_type(message) {
    /*
      message_div = $('<div style='+unknown_style+'class=\"row message\"></div>').text(JSON.stringify(message));
      $('#responses').prepend(message_div);
      */
      message = "**UNKNOWN TYPE**<br>"+JSON.stringify(message);
      var html = "<div class='message_wrapper'><div class='output message'>";
      html += message + "</div></div>";
      $('#responses').append(html);
      $('#responses').scrollTop($('#responses')[0].scrollHeight);
  }


  function on_response(response) {
      console.log('received ', response);
      if(response.type === 'response') {
          if(response.additional_data.formal_request.subtype == 'news'){
            parse_news();
            on_message(response.data.body.headline);
            on_message(response.data.body.text_body);
          }else{
            on_message(response.data.body.headline);
            on_message(response.data.body.text_body);
          }
      } else if(response.type === 'exception') {
          on_exception(response.data.body);
      }else if(response.type === 'lsit') {
          for (var i = 0; i < response.data.length; i++) {
              on_response(response.data[i]);
          }

      } else {
          on_unknown_type(response);
      }
  }

  function parse_news(titles, summary_data){
    var news = titles.split("\n");

  }

  function send_to_server(message) {
      message_json = {type: 'message', data: {body: message}};
      send_json(message_json);
  }

  function request_notifications() {
      message_json = {type: 'notifications_request'};
      send_json(message_json);
  }

  function on_ajax_fail(e) {
       on_exception('An error occured: ' + e.statusText + ' ' + e.status);
  }

  function send_json(message_json) {
      console.log('Sending ', message_json, ' to ', url);
      $.ajax({
          url: url,
          type: 'POST',
          data: JSON.stringify(message_json, null, '\t'),
          contentType: 'application/json;charset=UTF-8',
          error: on_ajax_fail,
          success: on_response
      });
  }

  function request_notifications_recurrent() {
      request_notifications();
      setTimeout(request_notifications_recurrent, notification_period_ms);
  }

  /*
  function scrollDownMessage(){
      var scrollHeight = $("#responses").prop("scrollHeight");
      window.scrollTo(0,scrollHeight);
  }
  */
  request_notifications_recurrent();
  //on_response(json);
  $('#responses').scrollTop($('#responses')[0].scrollHeight);
});
