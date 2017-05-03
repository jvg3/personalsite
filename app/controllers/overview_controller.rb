class OverviewController < ApplicationController

  before_action :set_props
  before_action :set_resume_path
  before_action :set_image_path

  def home
  end

  def resume
    @file = File.open('resume.pdf')
    send_file @file, filename: "John_Gregory_Resume_2017", type: "application/pdf"
  end

  private

  def set_resume_path
    @props['resume_path'] = ActionController::Base.helpers.asset_path('resume.pdf')
  end

  def set_image_path
    @props['image_path'] = ActionController::Base.helpers.asset_path('propic.jpg')
  end

  def set_props
    @props = {}
  end

end
