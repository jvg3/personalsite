class OverviewController < ApplicationController

  before_action :set_props

  def home
  end

  def resume
    @file = File.open('resume.pdf')
    send_file @file, filename: "John_Gregory_Resume_2017", type: "application/pdf"
  end

  private

  def set_props
    @props = {
      background_img_path: ActionController::Base.helpers.asset_path('sanfrancisco.jpg'),
      propic_path: ActionController::Base.helpers.asset_path('propic.jpg'),
      resume_path: ActionController::Base.helpers.asset_path('resume.pdf')
    }
  end

end
