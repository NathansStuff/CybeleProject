module Api
    module V1 
        class DailyUpdatesController < ApplicationController
            def create
                daily_update = animal.daily_updates.new(daily_updates_params)
                console.log('******Hit controller*****')
                if daily_update.save 
                    render json: DailyUpdateSerializer.new(update).serialized_json
                else
                    render json: { error: update.erros.messages }, status: 422
                end
            end
            def destroy
                update = DailyUpdate.find(params[:id])
                if update.destroy 
                    head :no_content
                else
                    render json: { error: update.erros.messages }, status: 422
                end
            end

            private
            def daily_updates_params
                params.require(:daily_updates).permit(:weight, :drank_water, :ate_food, :notes)
            end
            def animal
                @animal = Animal.find(params[:animal_id])
            end
        end
    end
end
