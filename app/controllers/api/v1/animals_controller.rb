module Api
    module V1 
        class AnimalsController < ApplicationController
            def index
                animals = Animal.all
                render json: AnimalSerializer.new(animals, options).serialized_json
            end
            def show 
                animal = Animal.find_by(params[:id])
                render json: AnimalSerializer.new(animal, options).serialized_json
            end
            def create 
                animal = Animal.new(animal_params)

                if animal.save
                    render json: AnimalSerializer.new(animal).serialized_json
                else
                    render json: { error: animal.errors.messages }, status: 422
                end
            end
            def update 
                animal = Animal.find_by(params[:id])

                if animal.update(animal_params)
                    render json: AnimalSerializer.new(animal, options).serialized_json
                else
                    render json: { error: animal.errors.messages }, status: 422
                end
            end
            def destroy 
                animal = Animal.find_by(params[:id])

                if animal.destroy
                    head :no_content
                else
                    render json: { error: animal.errors.messages }, status: 422
                end
            end
            private
            def animal_params
                params.require(:animal).permit(:name, :age, :breed, :microchip, :microchip_number, :notes)
            end
            def options
                @options ||= { include: %i[daily_updates] }
            end
        end
    end
end