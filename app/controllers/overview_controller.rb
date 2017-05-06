class OverviewController < ApplicationController

  before_action :set_props

  def home
  end

  # def resume
  #   @file = File.open('resume.pdf')
  #   send_file @file, filename: "John_Gregory_Resume_2017", type: "application/pdf"
  # end

  private

  def set_props

    @props = {
      asset_paths: {
        propic: asset_path('propic.jpg'),
        bus_card: asset_path('bus_card.jpg'),
        resume: asset_path('resume.pdf'),
        heroku: asset_path('heroku.svg'),
        aws: asset_path('aws.svg'),
        postgres: asset_path('postgres.svg'),
        mongo: asset_path('mongo.svg'),
        meteor: asset_path('meteor.svg'),
        rails: asset_path('rails.svg'),
        redis: asset_path('redis.svg'),
        html: asset_path('html.svg'),
        scss: asset_path('scss.svg'),
        react: asset_path('react.svg'),
        javascript: asset_path('javascript.svg'),
        android: asset_path('android.svg'),
        ios: asset_path('ios.svg')
      }
    }

  end

  def asset_path(path)
    ActionController::Base.helpers.asset_path(path)
  end

end
