<?php

namespace App\Filament\Resources\OrderResource\RelationManagers;

use Filament\Forms;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class OrderDetailsRelationManager extends RelationManager
{
    protected static string $relationship = 'orderDetails';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Select::make('product_name')
                    ->options([
                        'Mint Fresh' => 'Mint Fresh',
                        'Infused Water Mint Flavour' => 'Infused Water Mint Flavour',
                        'Infused Water Strawberry Lemon Flavour' => 'Infused Water Strawberry Lemon Flavour',
                    ])
                    ->required()
                    ->label('Product Name'),
                Select::make('size')
                    ->options([
                        'Can' => 'Can',
                        '250ml' => '250ml',
                        '500ml' => '500ml',
                    ])
                    ->required()
                    ->label('Size'),
                Select::make('price')
                    ->options([
                        '9.000' => 9000,
                        '15.000' => 15000,
                    ])
                    ->required()
                    ->label('Price'),
                TextInput::make('quantity')
                    ->required()
                    ->numeric()
                    ->maxLength(5)
                    ->label('Quantity'),
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('product_name')
            ->columns([
                TextColumn::make('id')
                    ->sortable()
                    ->searchable()
                    ->label('Detail ID'),
                TextColumn::make('product_name')    
                    ->sortable()
                    ->searchable()
                    ->label('Product Name'),
                TextColumn::make('size')
                    ->sortable()
                    ->searchable()
                    ->label('Size'),
                TextColumn::make('price')
                    ->sortable()
                    ->searchable()
                    ->label('Price'),
                TextColumn::make('quantity')
                    ->sortable()
                    ->searchable()
                    ->label('Quantity'),
            ])
            ->filters([
                //
            ])
            ->headerActions([
                Tables\Actions\CreateAction::make(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }
}
