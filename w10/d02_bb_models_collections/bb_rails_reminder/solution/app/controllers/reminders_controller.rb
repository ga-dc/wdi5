class RemindersController < ApplicationController
  def index
    @reminders = Reminder.all
    render status: 200, json: @reminders.to_json
  end

  def show
    @reminder = Reminder.find(params[:id])
    render status: 200, json: @reminder.to_json
  end

  def create
    render nothing: true
  end

  def update
    render nothing: true
  end

  def destroy
    render nothing: true
  end

  private
  def reminder_params
    params.require(:reminder).permit(:body, :completed)
  end
end
