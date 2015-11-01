---
layout: post
title: "Week 1: Introduction to Networks"
author: CS423
---



## 1. Aspects of Networks.

Modern societies are in many ways highly connected.  Certain aspects of this
phenomenon are frequently described as _networks_:

* social networks (of friends)
* ...

In a network, changes don't happen in isolation, and actions need to
be evaluated with the expectation that the world will react to whatever
you do.  Modifications to products, web sites, government policies,
that look like good ideas under the assumption that everything else
remains unchanged, can easily create incentives that shift behaviour
across the network in unintended ways.

Network effects happen regardless of whether we are able to actually
see the network or not.  Why do some ideas, tweets, videos get _viral_
and others don't?  To understand how such processes work and how they
are realized through the interconnected actions of many people, we
need to study the _dynamics of aggregate behavior_.

Understanding highly connected systems requires a set of ideas for reasoning about

* network structure,
* strategic behavior,
* and feedback effects across large populations.

The emerging interdisciplinary field of __Network Science__ draws on

* __Computer Science__, (Applied) __Mathematics__, and __Operations
Research__ for a language to talk about the complexity of network
structures, information and systems with interacting agents,
* __Economics__ for models for the strategic behavior of individuals
who interact with each other as members of larger aggregates,
* (Mathematical) __Sociology__ for theoretical frameworks for
the structure and dynamics of social groups.

The new field addresses shortcomings in the individual disciplines,
and builds on recent developments, such as the World Wide Web and the
many new contexts it provides for network data and network
applications,  thereby creating new opportunities to pose questions,
formulate theories and evaluate predictions about social networks.

One of the challenges arises from the fact that networks span many
levels of scale and resolution.  A small scale example of a network is
the 30-or-so person social network of the people in this class.  A
large scale example is the collection of interlinked web pages that
forms the World Wide Web, which is constantly searched for the most
relevant information.  It is a challenging scientific problem to
bridge these vastly different levels of scale so that predictions and
principles from one level can meaningfully be transferred to others.

## 2. Central Themes and Topics

We now introduce some of the main topics of this course
and the ways in which they further our understanding of networks.

__Graph Theory.__ In this context, graph theory is the study of
_network structure_.  We focus particularly on fundamental ideas from
social network analysis, for example the dichotomy of _strong ties_
versus _weak ties_.  This is an example of a general phenomenon in
social networks.  Strong ties, representing close and frequent social
contacts, tend to be embedded in tightly linked regions of the
network.  Weak ties on the other hand, representing more casual and
distant social contacts, tend to cut across those regions.  Such a
distinction suggests a way of thinking about a social network in terms
of its dense pockets of strong ties and the ways in which they
interact with each other through weaker ties.

<!--
![A communications network][hplabs]
-->

__Game Theory.__ This is the study of _network behaviour_.  There are
numerous settings in which a group of people must simultaneously
choose how to act, knowing that the outcome will depend on the
decisions made by all of them.  For example, when choosing a route for
driving through a network of busy roads, the experienced delay through
traffic congestion depends on choices made by many, not only the
driver.  In this example, the network is a _shared resource_,
and the combined decisions of all its users will influence how efficiently
the resource is used.
Another example is that of bidding in an auction.  Again, a bidder's
success does not only depend on their own bidding strategy, but also
on the other bidders' strategies.

The following common framework allows us to study and make predictions
in these and a range of other situations.  We assume that in a
collection of individuals, each one chooses and then is committed to a
_strategy_, and that in the end each individual receives a _payoff_
depending on the strategies chosen by everyone.  A central idea in
this framework is the notion of an _equilibrium_, that is a state that
provides no individual with an incentives to unilaterally change their
strategy, even if they know how others will behave.

__Markets and Strategic Interaction in Networks.__ Graph theory
combined with game theory produces richer models of behaviour in
networks.  The interactions among buyers and sellers in a market
naturally form a network, whose internal structure encodes a lot of
information about the market, like how the success of different
participants is affected by their position in the market.

![medieval Europe][europ]

In medieval Europe, the physical movement of goods was costly and
difficult, and the economic outcome for a trading city can depend
significantly on where they are located in the underlying
transportation network.  Having a powerful position in a network
depends not just on having many connections, but also on more subtle
features such as the power of those you are connected to.

__Information Networks.__ The information we deal with online has a
network structure provided through the links between web pages.
Search engines, like Google, make extensive use of the network
structure (as opposed to the actual content of the pages searched) in
evaluating the quality and relevance of a web page, based not only on
the number of links it receives, but also on subtle aspects of its
position in the network.  For example, a page can be viewed as
prominent if it receives links from pages that are themselves
prominent.  As we will see, this seemingly circular notion of
prominence can be resolved through a more careful definition based on
a kind of equilibrium in the link structure.

The interaction between search engines and the authors of web pages
also provides an interesting example of feedback effects.  Whenever a
search engine introduces a new method for ranking their search
results, web page creators react and optimize their pages in ways that
achieve higher ranks.  This shows that improvements to search engines
cannot be designed under the assumption the Web itself will not be
affected by the change.  New search methods must be developed with
these feedback effects in mind.

__Network Dynamics: Population Effects.__ In a large population
certain _social practices_ (ideas, beliefs, opinions, innovations,
technologies and social conventions) are emerging and evolving over
time.  The way in which new practices spread through a population
depends on how people influence each other's behaviour.  The more
people you see doing something new, you become more likely to do it,
too.  Understanding this process of imitating the decisions of others
is central for our understanding of networks and aggregate behaviour.

Why are poeple influenced by the behaviour of others?  One reason is
that the behaviour of others conveys information.  You may have your
own private information on which a decision between alternatives could
be based.  But if you see many people making a particular choice, it
is natural to assume that they too base their decision on information.
Seeing that a certain restaurant is extremely crowded every weekend
suggests that many people think highly of it.  In the extreme form of
an _information cascade_, this sort of reasoning can lead to
situations where the actions of a large set of people are in fact
based on surprisingly little genuine information.

A second class of reasons comes from situations where a direct benfit
can be gained from aligning one's behaviour with that of (many)
others.  If, for example, the value of a social media site derives
from the potential to interact with others, to have access to a wide
range of content and to have a large audience for your owm content,
then such a site becomes more valuable when more poeple join it.  At
some point, regardless of whether a competitor site offers more
advanced technical features, a site can become so popular that there
is by definition an added value in using it.  Such _network effects_
amplify the success of products and technologies that are already
doing well, an example of a "the rich get richer" feedback process.

__Network Dynamics: Structural Effects.__ The question of how people
influence each other's behaviour is already quite subtle even when the
actual structure of the underlying network is not taken into account.
The network structure provides important further insights into how
influence takes place. In many cases, you may care more about aligning
your own behaviour with that of your close friends, rather than with
the population as a whole.  When individuals have incentives to adopt
the behaviour of their neighbours in the network, there can be
_cascading effects_ in which a new behaviour starts off with a small
set of initial adopters and then spreads radially outward through the
network.  This cascading behaviour is sometimes referred to as "social
contagion", likening it to the spreading pattern of a biological
epidemic.

__Institutions and Aggregate Behaviour.__ Once we have developed some
of the basic forces underlying networks and strategic behaviour, we
can ask how the _institutions_ designed by a society can channel these
forces to produce certain kinds of overall outcome.  Here, an
institution can be any set of rules, conventions or mechanisms that
serves to synthesize individual actions into a pattern of aggregate
behaviour.  This kind of analysis can be very informative in a number
of settings.  In a finacial market, for example, the market price
serves to aggregate individuals' beliefs about the value of the assets
being traded.  The overall behaviour of the market serves to
synthesize the information that is held by many participants.
_Voting_ is another social institution that aggregates behaviour
across a population.

We hope to develop a network perspective as a powerful way of looking
at complex systems in general.  Networks provide a way of thinking
about social dynamics, economic interaction, online information,
designed technology and natural processes, and approaching such
systems with an eye toward their internal structural patterns and the
resulting rich feedback effects.

## Exercises

1. Find 3 examples of networks not mentioned above.  Enter your answer into the comment box below.

2. Pick one of those examples and formulate an interesing question about the chosen network.

[hplabs]: http://www-personal.umich.edu/~ladamic/img/hplabsemailhierarchy.jpg  "HPLABS"

[europ]: http://upload.wikimedia.org/wikipedia/commons/e/e1/Late_Medieval_Trade_Routes.jpg "medieval trade routes"