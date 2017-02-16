class OverviewController < ApplicationController

  def home
  end

  def about
    @image_path = ActionController::Base.helpers.asset_path('propic.jpg')
  end

  def projects
  end

  def contact
  end

end
