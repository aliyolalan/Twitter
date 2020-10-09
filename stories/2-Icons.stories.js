import React from 'react'

import * as Icons from '../components/icons'
import Photo from '../components/Photo'
import ProfileBox from '../components/Profile-Box'

export default {
  title: 'Icons'
}

export const Icon = () => (
  <div className="icons">
    <Icons.ArrowBottom />
    <Icons.Bookmark />
    <Icons.BookmarkFill />
    <Icons.Emoji />
    <Icons.Explore />
    <Icons.ExplorerFill />
    <Icons.Gif />
    <Icons.Home />
    <Icons.HomeFill />
    <Icons.Like />
    <Icons.Lists />
    <Icons.ListsFill />
    <Icons.Media />
    <Icons.Messages />
    <Icons.MessagesFill />
    <Icons.More />
    <Icons.Notification />
    <Icons.NotificationFill />
    <Icons.Options />
    <Icons.Profile />
    <Icons.ProfileFill />
    <Icons.Question />
    <Icons.Reply />
    <Icons.Retweet />
    <Icons.Search />
    <Icons.Share />
    <Icons.TimelineProp />
    <Icons.Twitter />
  </div>
)

export const ProfilePhoto = () => (
  <Photo src="https://www.lse.ac.uk/management/assets/images/alumni/alumni-stories/steve-dool-600x600.jpg" />
)

export const Box = () => <ProfileBox />
